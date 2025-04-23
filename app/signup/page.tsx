"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    agreeTerms?: string
  }>({})

  const validateForm = () => {
    const newErrors: {
      name?: string
      email?: string
      password?: string
      confirmPassword?: string
      agreeTerms?: string
    } = {}

    if (!name) {
      newErrors.name = "Name is required"
    }

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) return

    setIsLoading(true)
    try {
      // Mock signup - replace with your actual signup logic
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful signup
      console.log("Signup successful", { name, email, password })

      // Redirect to home page or login page
      router.push("/login")
    } catch (err) {
      console.error("Signup failed:", err)
      setError("Failed to create account. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="container-custom max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=50&width=180"
                alt="Tailoring Turba Logo"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
            <p className="text-gray-600">Join Tailoring Turba to start designing your custom t-shirts</p>
          </div>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-500 hover:text-blue-600">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-500 hover:text-blue-600">
                      Privacy Policy
                    </Link>
                  </label>
                  {errors.agreeTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl font-medium hover:bg-blue-600 transition-colors disabled:opacity-70"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:text-blue-600 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
