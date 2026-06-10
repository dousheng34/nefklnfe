'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap, BarChart3, Lock, Cpu, Users, Workflow, CheckCircle2, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MINDFLOW</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition">Testimonials</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
            <span className="text-sm font-medium text-blue-300">🚀 AI-Powered Automation Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Automate Your Business with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Intelligence</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            MINDFLOW uses advanced AI to automate complex workflows, reduce manual work by 80%, and scale your business effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base h-12 px-8">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-blue-500/50 hover:bg-blue-500/10 text-base h-12 px-8">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-3xl font-bold text-blue-400">500K+</p>
              <p className="text-sm text-gray-400 mt-1">Tasks Automated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">10K+</p>
              <p className="text-sm text-gray-400 mt-1">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">80%</p>
              <p className="text-sm text-gray-400 mt-1">Time Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400">Everything you need to automate and scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: 'AI-Powered Automation', desc: 'Intelligent workflows that learn and adapt' },
              { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Deep insights into your automation performance' },
              { icon: Lock, title: 'Enterprise Security', desc: 'Bank-level encryption and compliance' },
              { icon: Workflow, title: 'No-Code Workflows', desc: 'Build complex automations without coding' },
              { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly in real-time' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Process millions of tasks with sub-second latency' },
            ].map((feature, i) => (
              <Card key={i} className="p-8 bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$99', features: ['Up to 10,000 tasks/month', '5 team members', 'Basic analytics'] },
              { name: 'Professional', price: '$499', features: ['Up to 100,000 tasks/month', '25 team members', 'Advanced analytics', 'Priority support'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited tasks', 'Unlimited team members', 'Custom integrations', 'Dedicated support'] },
            ].map((plan, i) => (
              <Card key={i} className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-purple-500/50' : 'bg-slate-800/50 border-blue-500/20'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Loved by Teams Worldwide</h2>
            <p className="text-xl text-gray-400">See what our customers say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'CEO, TechCorp', text: 'MINDFLOW reduced our manual work by 85%. The ROI was immediate.' },
              { name: 'James Wilson', role: 'Operations Manager, FinServe', text: 'The best automation platform we\'ve used. Highly recommended!' },
              { name: 'Maria Garcia', role: 'CTO, DataFlow Inc', text: 'Seamless integration with our existing tools. Game changer.' },
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 bg-slate-800/50 border-blue-500/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of companies automating their workflows with MINDFLOW</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base h-12 px-8">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500/50 text-white hover:bg-blue-500/10 text-base h-12 px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
                <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MINDFLOW</span>
              </div>
              <p className="text-sm text-gray-400">AI-powered automation for modern businesses</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2026 MINDFLOW. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
