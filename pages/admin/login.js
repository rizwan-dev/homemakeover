import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [lockedUntil, setLockedUntil] = useState(0)
  const [cooldownUntil, setCooldownUntil] = useState(0)

  const MAX_ATTEMPTS = 5
  const WINDOW_MS = 10 * 60 * 1000 // 10 minutes window
  const LOCKOUT_MS = 15 * 60 * 1000 // 15 minutes lockout after max attempts
  const COOLDOWN_MS = 3000 // 3s between attempts

  const getRate = () => {
    try { return JSON.parse(localStorage.getItem('adminLoginRate') || '{}') } catch { return {} }
  }

  const setRate = (obj) => {
    localStorage.setItem('adminLoginRate', JSON.stringify(obj))
  }

  const clearRate = () => {
    localStorage.removeItem('adminLoginRate')
    setLockedUntil(0)
    setCooldownUntil(0)
  }

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth')
    if (isAuthenticated) router.push('/admin/dashboard')
    // hydrate lock state
    const rate = getRate()
    if (rate.lockedUntil && rate.lockedUntil > Date.now()) setLockedUntil(rate.lockedUntil)
    if (rate.lastAttemptAt && rate.lastAttemptAt + COOLDOWN_MS > Date.now()) setCooldownUntil(rate.lastAttemptAt + COOLDOWN_MS)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    // Check lock
    const now = Date.now()
    const rate = getRate()
    if (rate.lockedUntil && rate.lockedUntil > now) {
      setLockedUntil(rate.lockedUntil)
      setError('Too many attempts. Please try again later.')
      return
    }
    if (rate.lastAttemptAt && rate.lastAttemptAt + COOLDOWN_MS > now) {
      const until = rate.lastAttemptAt + COOLDOWN_MS
      setCooldownUntil(until)
      setError('Please wait a moment before trying again.')
      return
    }

    // Simple demo credentials, replace with real auth in production
    if (username === 'imranadmin' && password === 'homeinterior@312') {
      localStorage.setItem('adminAuth', 'true')
      clearRate()
      router.push('/admin/dashboard')
    } else {
      // increment failed attempts in window
      const nowRate = getRate()
      const first = nowRate.firstFailedAt && now - nowRate.firstFailedAt < WINDOW_MS ? nowRate.firstFailedAt : now
      const failed = (nowRate.firstFailedAt && now - nowRate.firstFailedAt < WINDOW_MS ? (nowRate.failed || 0) : 0) + 1
      const nextRate = { ...nowRate, firstFailedAt: first, failed, lastAttemptAt: now }
      if (failed >= MAX_ATTEMPTS) {
        nextRate.lockedUntil = now + LOCKOUT_MS
        nextRate.failed = 0
        nextRate.firstFailedAt = 0
        setLockedUntil(nextRate.lockedUntil)
        setError('Too many attempts. Please try again later.')
      } else {
        setCooldownUntil(now + COOLDOWN_MS)
        setError('Invalid credentials')
      }
      setRate(nextRate)
    }
  }

  const secondsLeft = (ts) => Math.max(0, Math.ceil((ts - Date.now()) / 1000))

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white font-bold flex items-center justify-center">HM</div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
          <p className="text-slate-500 text-sm mt-1">Access the submissions dashboard</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={lockedUntil > Date.now() || cooldownUntil > Date.now()}
            className={`w-full px-4 py-2 rounded-lg font-semibold text-white ${
              lockedUntil > Date.now() || cooldownUntil > Date.now()
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-primary hover:bg-primary-light'
            }`}
          >
            {lockedUntil > Date.now()
              ? `Locked (${secondsLeft(lockedUntil)}s)`
              : cooldownUntil > Date.now()
                ? `Please wait (${secondsLeft(cooldownUntil)}s)`
                : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}


