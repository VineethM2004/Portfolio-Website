import React, { useState } from 'react';
import Section from './shared/Section';
import { contact } from '../data/resumeData';
import Button from './shared/Button';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_w7kdfud',
      'template_yy3vbxj',
      e.target as HTMLFormElement,
      'pY17x88d6b29PrFyS'
    ).then(
      (result) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully!',
        });
      },
      (error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'There was an error sending your message. Please try again later.',
        });
      }
    );
    setFormData({
      name: '',
      email: '',
      title: '',
      message: '',
    });
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: '',
      });
    }, 5000);
  };

  const ContactItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
        <Icon size={20} className="text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{label}</h3>
        <p className="text-gray-700 dark:text-gray-300">{value}</p>
      </div>
    </div>
  );

  return (
    <Section id="contact" title={contact.title}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">{contact.description}</p>
            <div className="space-y-6">
              <ContactItem {...contact.email} />
              <ContactItem {...contact.phone} />
              <ContactItem {...contact.location} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Send me a message
            </h3>
            {formStatus.submitted ? (
              <div
                className={`p-4 mb-6 rounded-lg ${
                  formStatus.success
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {formStatus.message}
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <Button type="submit" variant="primary" icon={Send} className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;