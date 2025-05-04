
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ThumbsUp, ThumbsDown, HelpCircle, MessageCircle } from "lucide-react";

export function FAQSection() {
  const [filter, setFilter] = useState("");
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean | null>>({});
  
  const faqCategories = [
    {
      category: "Booking & Reservations",
      items: [
        {
          id: "booking-1",
          question: "How do I book a train ticket on RailEasy?",
          answer: "Booking a train ticket on RailEasy is simple. First, navigate to the Train Search page, enter your origin and destination stations, select your travel date and preferred class, then click 'Search Trains'. From the results, choose your preferred train and class, fill in passenger details, and proceed to payment. Once payment is confirmed, your e-ticket will be generated and sent to your email."
        },
        {
          id: "booking-2",
          question: "How far in advance can I book a train ticket?",
          answer: "You can book regular train tickets up to 120 days (4 months) in advance. For tatkal bookings, you can book one day before the journey date, with tatkal booking opening at 10:00 AM for AC classes and 11:00 AM for non-AC classes."
        },
        {
          id: "booking-3",
          question: "What is the difference between waiting list, RAC, and confirmed tickets?",
          answer: "A confirmed ticket guarantees you a seat/berth. RAC (Reservation Against Cancellation) means you share a berth with another passenger. Waiting list tickets do not guarantee travel and are confirmed only if other passengers cancel their tickets. You should only board the train with a WL ticket if it gets confirmed before the journey."
        },
        {
          id: "booking-4",
          question: "I've booked a ticket but haven't received my e-ticket. What should I do?",
          answer: "If your payment was successful but you haven't received your e-ticket, please check your spam or junk folder first. You can also log in to your RailEasy account and go to 'My Bookings' to check your booking status and download your e-ticket. If your booking isn't visible there, please contact our customer support with your transaction details."
        }
      ]
    },
    {
      category: "Cancellations & Refunds",
      items: [
        {
          id: "refund-1",
          question: "How do I cancel my train ticket?",
          answer: "To cancel your ticket, log in to your RailEasy account and go to 'My Bookings'. Find the booking you wish to cancel, click 'View Details' and then select 'Cancel Ticket'. Follow the prompts to complete the cancellation. You can cancel your ticket online up to 4 hours before the scheduled departure. The refund amount will be processed according to the cancellation policy."
        },
        {
          id: "refund-2",
          question: "What is the refund policy for cancelled tickets?",
          answer: "Refund amounts depend on when you cancel your ticket relative to the departure time. For cancellations done more than 48 hours before departure, a cancellation fee of ₹240 for AC First Class/Executive Class, ₹200 for AC 2 Tier/First Class, ₹180 for AC 3 Tier/AC Chair Car, and ₹120 for Sleeper Class is charged. The fee increases closer to departure time. No refund is provided if cancelled less than 4 hours before departure."
        },
        {
          id: "refund-3",
          question: "How long does it take to get a refund after cancellation?",
          answer: "If you paid by credit/debit card or net banking, refunds typically process within 5-7 working days, depending on your bank. For UPI payments, refunds usually reflect in 2-3 working days. You can track your refund status in the 'My Bookings' section under 'Cancelled Bookings'."
        }
      ]
    },
    {
      category: "Payment Issues",
      items: [
        {
          id: "payment-1",
          question: "I was charged but my booking failed. What should I do?",
          answer: "If money was deducted but you didn't receive a booking confirmation, it's likely a case of failed transaction where the money will be automatically refunded within 5-7 working days. You can check the status under 'Transaction History' in your account. If it shows as 'Failed', the refund is automatic. If the status is unclear or you don't receive a refund within 7 days, please contact our customer support."
        },
        {
          id: "payment-2",
          question: "What payment methods do you accept?",
          answer: "RailEasy accepts various payment methods including credit/debit cards (Visa, Mastercard, RuPay), net banking (40+ banks), UPI, mobile wallets (PayTM, PhonePe, Amazon Pay), and IRCTC prepaid wallets. International cards are accepted with 3D-secure verification."
        },
        {
          id: "payment-3",
          question: "Is it safe to save my card details on RailEasy?",
          answer: "Yes, RailEasy uses industry-standard security protocols. When you save your card, we store only the last 4 digits and expiry date. The full card details are tokenized and stored securely in compliance with PCI DSS standards. You can remove saved cards anytime from your account settings."
        }
      ]
    },
    {
      category: "Account & Technical Issues",
      items: [
        {
          id: "account-1",
          question: "How do I create an account on RailEasy?",
          answer: "To create a RailEasy account, click on the 'Sign up' button on the top right corner of the homepage. Enter your email address, create a password, and provide basic details like name and phone number. Verify your email address through the verification link sent to your email. Once verified, your account is ready to use."
        },
        {
          id: "account-2",
          question: "I forgot my password. How can I reset it?",
          answer: "Click on 'Log in', then select 'Forgot password?'. Enter your registered email address and we'll send you a password reset link. Click on the link in the email and follow the instructions to set a new password. For security reasons, the reset link is valid for only 24 hours."
        },
        {
          id: "technical-1",
          question: "The app/website is not working properly. What should I do?",
          answer: "First, try refreshing the page or restarting the app. Clear your browser cache or app cache, and ensure you have a stable internet connection. If the issue persists, try using a different browser or updating the app to the latest version. If none of these solutions work, please report the issue to our customer support with details of the problem and screenshots if possible."
        }
      ]
    }
  ];
  
  const handleFeedback = (id: string, isHelpful: boolean) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [id]: isHelpful
    }));
  };
  
  const filteredFAQs = filter 
    ? faqCategories.map(category => ({
        ...category,
        items: category.items.filter(item => 
          item.question.toLowerCase().includes(filter.toLowerCase()) || 
          item.answer.toLowerCase().includes(filter.toLowerCase())
        )
      })).filter(category => category.items.length > 0)
    : faqCategories;
  
  return (
    <div className="space-y-8">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          type="text" 
          placeholder="Search frequently asked questions..."
          className="pl-10"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      
      {filteredFAQs.length === 0 ? (
        <div className="text-center py-8">
          <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No matching questions found</h3>
          <p className="text-muted-foreground">
            Try different keywords or contact our support team for assistance
          </p>
          <Button variant="outline" className="mt-4">Contact Support</Button>
        </div>
      ) : (
        <>
          {filteredFAQs.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold">{category.category}</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {category.items.map(item => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{item.answer}</p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-sm">
                            Was this answer helpful?
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className={helpfulFeedback[item.id] === true ? "bg-primary text-primary-foreground" : ""}
                              onClick={() => handleFeedback(item.id, true)}
                            >
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Yes
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className={helpfulFeedback[item.id] === false ? "bg-primary text-primary-foreground" : ""}
                              onClick={() => handleFeedback(item.id, false)}
                            >
                              <ThumbsDown className="h-4 w-4 mr-1" />
                              No
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          
          <div className="bg-accent p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Still have questions?</h3>
                <p className="text-muted-foreground">Our support team is ready to assist you</p>
              </div>
              <Button>
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
