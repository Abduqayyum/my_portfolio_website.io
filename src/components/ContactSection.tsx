
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection = ({ isDarkMode }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}>Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>Let's Connect</h3>
            <p className={`text-lg leading-relaxed mb-8 transition-colors duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-700'
            }`}>
              I'm always interested in discussing new opportunities, collaborations, 
              or simply chatting about the latest in AI and machine learning. 
              Feel free to reach out!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className={`font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>Email</div>
                <div className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-600'
                }`}>rabduqayum@mail.ru</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </div>
              <div>
                <div className={`font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>Telegram</div>
                <div className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-600'
                }`}>@abduqayum_0015</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <Card className={`transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        }`}>
          <CardHeader>
            <CardTitle className={`transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500'
                  }`}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                    : 'bg-white border-gray-300 text-black placeholder-gray-500'
                }`}
                required
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className={`min-h-32 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' 
                    : 'bg-white border-gray-300 text-black placeholder-gray-500'
                }`}
                required
              />
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;
