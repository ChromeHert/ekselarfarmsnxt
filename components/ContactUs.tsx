'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<FormData>()

  const [serverError, setServerError] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('https://formspree.io/f/xjkoyqzy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Failed to send message.')
      }

      reset()
    } catch (err: any) {
      setServerError(err.message || 'Something went wrong')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-300">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions about our products or want to schedule a visit? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-cream-200 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-brown-200 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium">Farm Location</h4>
                  <p className="text-gray">Adu Village by Oni Village, Lawoyin, Apete/Akufo Road, Ido, Oyo state</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray">(+234) 8060599605</p>
                  <p className="text-gray">(+234) 8139420269</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray"><a href="mailto:ekselarfarms@gmail.com">ekselarfarms@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium">Farm Hours</h4>
                  <p className="text-gray-800">Monday-Saturday: 8am - 6pm</p>
                </div>
              </div>
            </div>
          {/*---------- Google Map ----------------*/}
            <div className="mt-8">
              <div className="w-full lg:w-3/4 xl:w-2/3 p-4 flex justify-center">
                <div className="rounded-full overflow-hidden w-full max-w-[40rem] aspect-square">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0!2d3.7119!3d7.5068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c2e6f1c3e4a7d%3A0x1a3b3c4d5e6f7g8h!2sIdo%2C%20Oyo%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1652901957916"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-brown-200 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">Your Name</label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">Your Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-2">Subject</label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="w-full h-32"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {serverError && <p className="text-red-600 text-sm mb-4">{serverError}</p>}
              {isSubmitSuccessful && (
                <p className="text-green-600 text-sm mb-4">Your message has been sent successfully!</p>
              )}

              <Button type="submit" disabled={isSubmitting} className="bg-green-400 w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}