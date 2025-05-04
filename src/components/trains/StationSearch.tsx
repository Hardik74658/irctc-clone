
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Comprehensive list of Indian railway stations (partial)
const indianStations = [
  "New Delhi (NDLS)", "Mumbai Central (BCT)", "Chennai Central (MAS)", "Howrah Junction (HWH)",
  "Bengaluru City Junction (SBC)", "Hyderabad Deccan (HYB)", "Pune Junction (PUNE)",
  "Ahmedabad Junction (ADI)", "Jaipur Junction (JP)", "Lucknow (LKO)", "Kanpur Central (CNB)",
  "Sealdah (SDAH)", "Bhopal Junction (BPL)", "Patna Junction (PNBE)", "Guwahati (GHY)",
  "Kochi (Ernakulam) (ERS)", "Thiruvananthapuram Central (TVC)", "Amritsar Junction (ASR)",
  "Jammu Tawi (JAT)", "Gwalior Junction (GWL)", "Nagpur Junction (NGP)", "Visakhapatnam (VSKP)",
  "Varanasi Junction (BSB)", "Bhubaneswar (BBS)", "Chandigarh (CDG)", "Gorakhpur Junction (GKP)",
  "Vijayawada Junction (BZA)", "Secunderabad Junction (SC)", "Agra Cantt (AGC)", "Surat (ST)",
  "Dehradun (DDN)", "Indore Junction (INDB)", "Raipur Junction (R)", "Ranchi Junction (RNC)",
  "Mysore Junction (MYS)", "Jabalpur Junction (JBP)", "Gaya Junction (GAYA)", "Dhanbad Junction (DHN)",
  "Bilaspur Junction (BSP)", "Salem Junction (SA)", "Thrissur (TCR)", "Ratlam Junction (RTM)",
  "Warangal (WL)", "Katpadi Junction (KPD)", "Tatanagar Junction (TATA)", "Madurai Junction (MDU)",
  "Kharagpur Junction (KGP)", "Kota Junction (KOTA)", "Anand Vihar Terminal (ANVT)", "Vadodara Junction (BRC)",
  "Mangalore Central (MAQ)", "Palakkad Junction (PGT)", "Jodhpur Junction (JU)", "Ghaziabad Junction (GZB)",
  "Haridwar Junction (HW)", "Moradabad Junction (MB)", "Mathura Junction (MTJ)", "Panipat Junction (PNP)",
  "Shimla (SML)", "Kalka (KLK)", "Agartala (AGTL)", "Silchar (SCL)", "Dibrugarh (DBRG)", "Darjeeling (DJ)",
  "Nanded (NED)", "Miraj Junction (MRJ)", "Ambala Cantt (UMB)", "Ludhiana Junction (LDH)", "Jalandhar City (JUC)",
  "Kathgodam (KGM)", "Lalkuan Junction (LKU)", "Bareilly Junction (BE)", "Saharanpur Junction (SRE)", 
  "Muzaffarpur Junction (MFP)", "Darbhanga Junction (DBG)", "Katihar Junction (KIR)", "New Jalpaiguri (NJP)",
  "Siliguri Junction (SGUJ)", "Dimapur (DMV)", "Lumding Junction (LMG)", "Tinsukia Junction (NTSK)", "Kishanganj (KNE)",
  "Barddhaman Junction (BWN)", "Malda Town (MLDT)", "Nabadwip Dham (NDAE)", "Bandel Junction (BDC)",
  "Krishnanagar City Junction (KNJ)", "Jalpaiguri Road (JPE)", "Alipurduar Junction (APDJ)",
  // Many more stations would be included in a real application
];

interface StationSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function StationSearch({ 
  value, 
  onChange, 
  placeholder = "Search stations", 
  className 
}: StationSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Filter stations based on input
  useEffect(() => {
    if (value.length > 0) {
      const filtered = indianStations.filter(
        station => station.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8); // Limit to top 8 matches
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [value]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          ref={inputRef}
          type="text" 
          placeholder={placeholder}
          className={`pl-10 ${className}`}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
      </div>
      
      {isFocused && suggestions.length > 0 && (
        <div 
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-card border border-border rounded-md shadow-md max-h-64 overflow-y-auto"
        >
          {suggestions.map((station, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-accent transition-colors"
              onClick={() => {
                onChange(station);
                setIsFocused(false);
              }}
            >
              {station}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
