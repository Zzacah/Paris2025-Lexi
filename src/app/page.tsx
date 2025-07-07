'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", frustration: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Hero Section with Parallax */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 w-full h-full z-0" style={{ willChange: 'transform', background: 'linear-gradient(to bottom, rgba(36,36,36,0.2) 0%, rgba(36,36,36,0.7) 100%)' }}>
          <Image
            src="/lexi-landing-hero.png"
            alt="Lexi Natural Deodorant Hero"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
            className="parallax-hero"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4" style={{ color: 'var(--cream)' }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg" style={{ color: 'var(--cream)' }}>Finally. A Natural Deodorant That Doesn&apos;t Quit on You</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md" style={{ color: '#fff', textShadow: '0 2px 8px rgba(35,35,35,0.5)' }}>Sophisticated protection that lasts from morning meetings to evening workouts, without compromise.</p>
          <a href="#learn-more" className="inline-block font-semibold px-8 py-3 rounded-full shadow-lg transition" style={{ background: "var(--gold)", color: "var(--charcoal)" }}>Learn More</a>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="learn-more" className="py-16 px-4 sm:px-8" style={{ background: "var(--cream)" }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center" style={{ color: "var(--charcoal)" }}>We Know the Frustration</h2>
        <p className="mb-6 max-w-2xl mx-auto" style={{ color: "var(--grey)" }}>You&apos;ve invested in premium natural deodorants, expecting them to match your standards. Instead, you&apos;re left checking your reflection in bathroom mirrors, wondering if others notice what you already know: it stopped working hours ago.</p>
        <ul className="grid gap-3 max-w-xl mx-auto text-left list-disc pl-6" style={{ color: "var(--grey)" }}>
          <li>30 minutes into your day, you&apos;re already worried</li>
          <li>Switching back to conventional before important meetings</li>
          <li>Avoiding your favorite workout classes</li>
          <li>Paying premium prices for disappointing performance</li>
        </ul>
      </section>

      {/* Solution Section with Accent Image */}
      <section className="py-16 px-4 sm:px-8 flex flex-col items-center" style={{ background: "var(--cream)" }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center" style={{ color: "var(--charcoal)" }}>Introducing Lexi</h2>
        <p className="mb-6 max-w-2xl mx-auto" style={{ color: "var(--grey)" }}>The first natural deodorant designed for women who refuse to choose between their values and their confidence</p>
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/Flux_Dev_Create_a_warm_inviting_and_natural_hero_image_for_a_w_0.jpg"
            alt="Warm inviting natural accent"
            width={400}
            height={220}
            className="rounded-lg shadow-lg object-cover border-2 border-[var(--gold)]"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border-l-8" style={{ borderColor: "var(--gold)" }}>
            <span className="font-semibold text-lg flex items-center gap-2" style={{ color: "var(--charcoal)" }}>⏰ 12 hour performance promise</span>
            <span style={{ color: "var(--grey)" }}>From boardroom to barre class</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border-l-8" style={{ borderColor: "var(--gold)" }}>
            <span className="font-semibold text-lg flex items-center gap-2" style={{ color: "var(--charcoal)" }}>🌱 Clean ingredient philosophy</span>
            <span style={{ color: "var(--grey)" }}>No aluminum, parabens, or synthetic fragrances</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border-l-8" style={{ borderColor: "var(--gold)" }}>
            <span className="font-semibold text-lg flex items-center gap-2" style={{ color: "var(--charcoal)" }}>👗 Invisible finish</span>
            <span style={{ color: "var(--grey)" }}>No residue on your favorite silk blouses</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border-l-8" style={{ borderColor: "var(--gold)" }}>
            <span className="font-semibold text-lg flex items-center gap-2" style={{ color: "var(--charcoal)" }}>🩺 Dermatologist tested</span>
            <span style={{ color: "var(--grey)" }}>Gentle enough for sensitive skin</span>
          </div>
        </div>
      </section>

      {/* Validation Data */}
      <section className="py-16 px-4 sm:px-8" style={{ background: "var(--cream)" }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center" style={{ color: "var(--charcoal)" }}>Proven Performance</h2>
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--charcoal)" }}>Customer Research</h3>
            <ul className="list-disc pl-6" style={{ color: "var(--grey)" }}>
              <li>87% of women reported natural deodorant failure within 2 hours (survey data)</li>
              <li>3 out of 4 women have switched back to conventional deodorants due to performance issues</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--charcoal)" }}>Product Testing <span className="text-xs" style={{ color: "var(--grey)" }}>(coming soon)</span></h3>
            <ul className="list-disc pl-6" style={{ color: "var(--grey)" }}>
              <li>Clinical testing shows 12-hour odor protection</li>
              <li>Stress tested by &lt;insert number here&gt; fitness instructors and executives</li>
              <li>92% would recommend to friends (beta testing results)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 sm:px-8" style={{ background: "var(--cream)" }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center" style={{ color: "var(--charcoal)" }}>Early Access Reviews</h2>
        <blockquote className="max-w-2xl mx-auto italic text-lg border-l-4 pl-4 mb-8" style={{ color: "var(--grey)", borderColor: "var(--gold)" }}>
          "Finally, a natural deodorant I can trust during my 6 AM Pilates class and my 6 PM investor dinner." <span className="not-italic font-semibold" style={{ color: "var(--charcoal)" }}>- Sarah, Tech Executive</span>
        </blockquote>
        <div className="flex flex-col items-center gap-4">
          <span className="font-bold text-xl" style={{ color: "var(--gold)" }}>Be Among the First</span>
          <span style={{ color: "var(--grey)" }}>Exclusive early access pricing · Limited founder's edition packaging</span>
        </div>
      </section>

      {/* Email Capture Form */}
      <section className="py-16 px-4 sm:px-8" style={{ background: "var(--cream)" }}>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto rounded-xl shadow p-8 flex flex-col gap-4" style={{ background: "#fff", border: "2px solid var(--gold)" }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>Get Early Access</h3>
          {submitted ? (
            <div className="font-semibold text-center py-8" style={{ color: "var(--gold)" }}>Thank you! We'll be in touch soon.</div>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded px-4 py-2 border border-gray-300 focus:outline-none"
                style={{ borderColor: "var(--gold)", color: "var(--charcoal)" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded px-4 py-2 border border-gray-300 focus:outline-none"
                style={{ borderColor: "var(--gold)", color: "var(--charcoal)" }}
              />
              <textarea
                name="frustration"
                placeholder="What&apos;s your biggest deodorant frustration?"
                value={form.frustration}
                onChange={handleChange}
                required
                className="rounded px-4 py-2 border border-gray-300 focus:outline-none min-h-[80px]"
                style={{ borderColor: "var(--gold)", color: "var(--charcoal)" }}
              />
              <button
                type="submit"
                className="font-semibold px-6 py-3 rounded-full shadow transition"
                style={{ background: "var(--gold)", color: "var(--charcoal)" }}
              >
                Request Early Access
              </button>
            </>
          )}
        </form>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-8" style={{ background: "var(--cream)" }}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: "var(--charcoal)" }}>FAQ</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-2" style={{ color: "var(--charcoal)" }}>What makes this different from other natural deodorants?</h4>
            <p style={{ color: "var(--grey)" }}>Lexi is the first natural deodorant with a 12-hour performance promise, a clean ingredient philosophy, and an invisible finish—designed for women who demand more from their products.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2" style={{ color: "var(--charcoal)" }}>How long does one application last?</h4>
            <p style={{ color: "var(--grey)" }}>One application is clinically tested to last up to 12 hours, even through workouts and high-stress days.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2" style={{ color: "var(--charcoal)" }}>Is it suitable for sensitive skin?</h4>
            <p style={{ color: "var(--grey)" }}>Yes! Lexi is dermatologist tested and formulated to be gentle enough for sensitive skin.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2" style={{ color: "var(--charcoal)" }}>What&apos;s your return policy?</h4>
            <p style={{ color: "var(--grey)" }}>We offer a 30-day satisfaction guarantee. If Lexi doesn&apos;t work for you, return it for a full refund—no questions asked.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
