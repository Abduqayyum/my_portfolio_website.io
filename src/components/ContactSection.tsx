
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
                }`}>alex@datascience.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className={`font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>Phone</div>
                <div className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-600'
                }`}>+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className={`font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>Location</div>
                <div className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-600'
                }`}>San Francisco, CA</div>
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
