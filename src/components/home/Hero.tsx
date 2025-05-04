import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Map, Search, Train, ArrowLeftRight, PlusCircle, MinusCircle, User, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export function Hero() {
  const [date, setDate] = useState<Date>();
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedQuota, setSelectedQuota] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeInput, setActiveInput] = useState<'from' | 'to' | null>(null);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const stations = [
    { code: 'NDLS', name: 'New Delhi', fullName: 'New Delhi Railway Station (NDLS)' },
    { code: 'BCT', name: 'Mumbai Central', fullName: 'Mumbai Central (BCT)' },
    { code: 'MAS', name: 'Chennai Central', fullName: 'Chennai Central (MAS)' },
    { code: 'HWH', name: 'Howrah Junction', fullName: 'Howrah Junction (HWH)' },
    { code: 'SBC', name: 'Bengaluru City', fullName: 'Bengaluru City Junction (SBC)' },
    { code: 'HYB', name: 'Hyderabad Deccan', fullName: 'Hyderabad Deccan (HYB)' },
    { code: 'PUNE', name: 'Pune Junction', fullName: 'Pune Junction (PUNE)' },
    { code: 'ADI', name: 'Ahmedabad Junction', fullName: 'Ahmedabad Junction (ADI)' },
    { code: 'JP', name: 'Jaipur Junction', fullName: 'Jaipur Junction (JP)' },
    { code: 'LKO', name: 'Lucknow', fullName: 'Lucknow (LKO)' },
    { code: 'CSTM', name: 'Mumbai CST', fullName: 'Chhatrapati Shivaji Terminus (CSTM)' },
    { code: 'PNBE', name: 'Patna Junction', fullName: 'Patna Junction (PNBE)' },
    { code: 'BBS', name: 'Bhubaneswar', fullName: 'Bhubaneswar (BBS)' },
    { code: 'SVDK', name: 'Secunderabad Junction', fullName: 'Secunderabad Junction (SVDK)' },
  ];

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow);
    setSelectedClass('all');
    setSelectedQuota('general');

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSuggestions([]);
        setActiveInput(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleStationInput = (value: string, setter: React.Dispatch<React.SetStateAction<string>>, type: 'from' | 'to') => {
    setter(value);
    setActiveInput(type);

    if (value.length > 1) {
      const filtered = stations.filter(station =>
        station.fullName.toLowerCase().includes(value.toLowerCase()) ||
        station.code.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.map(s => s.fullName));
    } else {
      setSuggestions([]);
    }
  };

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);

    if (fromInputRef.current) fromInputRef.current.classList.add('animate-pulse');
    if (toInputRef.current) toInputRef.current.classList.add('animate-pulse');

    setTimeout(() => {
      if (fromInputRef.current) fromInputRef.current.classList.remove('animate-pulse');
      if (toInputRef.current) toInputRef.current.classList.remove('animate-pulse');
    }, 700);
  };

  const handleSearchTrains = () => {
    if (!fromStation || !toStation) {
      toast({
        title: "Missing information",
        description: "Please select both origin and destination stations",
        variant: "destructive"
      });
      return;
    }

    if (!date) {
      toast({
        title: "Missing date",
        description: "Please select a travel date",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      navigate('/trains', {
        state: {
          from: fromStation,
          to: toStation,
          date: date ? format(date, 'yyyy-MM-dd') : '',
          class: selectedClass,
          quota: selectedQuota,
          passengers
        }
      });

      toast({
        title: "Searching trains",
        description: `Finding trains from ${fromStation} to ${toStation}`,
      });
    }, 1000);
  };

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 -z-10" />

      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={Math.random() * 0.5 + 0.1}
              fill="currentColor"
              className="text-primary animate-pulse"
              style={{ animationDelay: `${Math.random() * 5}s`, animationDuration: `${Math.random() * 10 + 5}s` }}
            />
          ))}
        </svg>
      </div>

      <svg
        className="absolute top-0 left-0 -z-10 h-full w-full opacity-30"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="100%" height="100%" fill="none" />
            <circle cx="15" cy="15" r="0.7" fill="currentColor" className="text-primary/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <svg className="absolute bottom-0 left-0 h-40 w-full opacity-10 -z-10">
        <path
          d="M-100,80 Q150,50 400,80 T900,60 T1400,80"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-primary"
        />
        <circle cx="200" cy="80" r="4" fill="currentColor" className="text-primary animate-pulse" />
        <circle cx="600" cy="70" r="4" fill="currentColor" className="text-primary animate-pulse" style={{ animationDelay: "1s" }} />
        <circle cx="1000" cy="75" r="4" fill="currentColor" className="text-primary animate-pulse" style={{ animationDelay: "2s" }} />
      </svg>

      <div className="container py-16 md:py-24 lg:py-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Travel Smarter with RailEasy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book train tickets quickly and easily with our modern booking platform.
            Compare routes, check seat availability, and secure your journey in minutes.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto mt-8 border shadow-lg backdrop-blur-sm bg-background/90 rounded-xl overflow-visible animate-scale-in transition-all hover:shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="relative flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="relative w-full">
                <label htmlFor="from-station" className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">From</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="from-station"
                    ref={fromInputRef}
                    type="text"
                    placeholder="From station or city"
                    className="pl-9 pr-3 py-6 rounded-xl transition-all border-muted focus:border-primary"
                    value={fromStation}
                    onChange={(e) => handleStationInput(e.target.value, setFromStation, 'from')}
                    onFocus={() => setActiveInput('from')}
                    aria-label="From station"
                  />
                  {activeInput === 'from' && suggestions.length > 0 && (
                    <div className="absolute z-10 mt-1 w-full bg-card/95 backdrop-blur-sm border rounded-xl shadow-xl max-h-60 overflow-auto transition-all animate-fade-in">
                      {suggestions.map((station) => (
                        <div
                          key={station}
                          className="px-4 py-3 cursor-pointer hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl flex items-center gap-2"
                          onClick={() => {
                            setFromStation(station);
                            setSuggestions([]);
                            setActiveInput(null);
                          }}
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {station}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 z-10 md:-right-5">
                <Button 
                  type="button" 
                  size="icon"
                  variant="secondary"
                  className="h-10 w-10 rounded-full shadow-md hover:shadow-lg transition-all bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110"
                  onClick={swapStations}
                  aria-label="Swap stations"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative w-full">
                <label htmlFor="to-station" className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">To</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="to-station"
                    ref={toInputRef}
                    type="text"
                    placeholder="To station or city"
                    className="pl-9 pr-3 py-6 rounded-xl transition-all border-muted focus:border-primary"
                    value={toStation}
                    onChange={(e) => handleStationInput(e.target.value, setToStation, 'to')}
                    onFocus={() => setActiveInput('to')}
                    aria-label="To station"
                  />
                  {activeInput === 'to' && suggestions.length > 0 && (
                    <div className="absolute z-10 mt-1 w-full bg-card/95 backdrop-blur-sm border rounded-xl shadow-xl max-h-60 overflow-auto transition-all animate-fade-in">
                      {suggestions.map((station) => (
                        <div
                          key={station}
                          className="px-4 py-3 cursor-pointer hover:bg-accent/50 transition-colors first:rounded-t-xl last:rounded-b-xl flex items-center gap-2"
                          onClick={() => {
                            setToStation(station);
                            setSuggestions([]);
                            setActiveInput(null);
                          }}
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {station}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Date of Journey</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal rounded-xl py-6 border-muted hover:border-primary transition-all",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
                        />
                      </svg>
                      {date ? (
                        <span className="font-medium">{format(date, 'EEE, MMM d, yyyy')}</span>
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 pointer-events-auto rounded-xl overflow-hidden shadow-xl" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        const triggerEl = document.activeElement as HTMLElement;
                        if (triggerEl) {
                          triggerEl.classList.add('animate-pulse');
                          setTimeout(() => triggerEl.classList.remove('animate-pulse'), 700);
                        }
                      }}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="rounded-xl border-none shadow-none"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Travel Class</label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="rounded-xl py-6 border-muted hover:border-primary transition-all">
                    <SelectValue placeholder="All Classes" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl overflow-hidden shadow-xl" position="item-aligned">
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="ac-1">AC First Class (1A)</SelectItem>
                    <SelectItem value="ac-2">AC 2 Tier (2A)</SelectItem>
                    <SelectItem value="ac-3">AC 3 Tier (3A)</SelectItem>
                    <SelectItem value="sleeper">Sleeper (SL)</SelectItem>
                    <SelectItem value="second-sitting">Second Sitting (2S)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Quota</label>
                <Select value={selectedQuota} onValueChange={setSelectedQuota}>
                  <SelectTrigger className="rounded-xl py-6 border-muted hover:border-primary transition-all">
                    <SelectValue placeholder="General" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl overflow-hidden shadow-xl" position="item-aligned">
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="ladies">Ladies</SelectItem>
                    <SelectItem value="tatkal">Tatkal</SelectItem>
                    <SelectItem value="premium-tatkal">Premium Tatkal</SelectItem>
                    <SelectItem value="senior-citizen">Senior Citizen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Button 
                className="w-full md:flex-1 py-6 rounded-xl text-base font-medium transition-all shadow-md hover:shadow-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary" 
                size="lg"
                onClick={handleSearchTrains}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching...
                  </div>
                ) : (
                  <>
                    <Train className="mr-2 h-5 w-5" />
                    Search Trains
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full md:w-auto py-6 rounded-xl text-base transition-all border-primary/50 hover:border-primary hover:bg-primary/5"
                onClick={() => navigate('/map', { state: { from: fromStation, to: toStation }})}
              >
                <Map className="mr-2 h-5 w-5 text-primary" />
                Show Map
              </Button>
            </div>
            
            {showAdvancedOptions && (
              <div className="mt-6 pt-4 border-t border-border animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Passengers</label>
                    <div className="flex items-center mt-1 border rounded-xl p-3 border-muted hover:border-primary transition-all">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full" 
                        onClick={() => setPassengers(Math.max(1, passengers - 1))}
                        disabled={passengers <= 1}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 text-center font-medium">{passengers}</div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full" 
                        onClick={() => setPassengers(Math.min(6, passengers + 1))}
                        disabled={passengers >= 6}
                      >
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Senior Citizens</label>
                    <Select>
                      <SelectTrigger className="rounded-xl py-6 border-muted hover:border-primary transition-all">
                        <SelectValue placeholder="No" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl overflow-hidden shadow-xl" position="item-aligned">
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Return Journey</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal rounded-xl py-6 border-muted hover:border-primary transition-all text-muted-foreground"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>Add return date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 pointer-events-auto rounded-xl overflow-hidden shadow-xl" align="start">
                        <Calendar
                          mode="single"
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className="rounded-xl border-none shadow-none"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Train Type</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["All", "Rajdhani", "Shatabdi", "Duronto", "Vande Bharat", "Passenger"].map(type => (
                        <Button 
                          key={type} 
                          variant="outline" 
                          size="sm" 
                          className="rounded-full"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 inline-block ml-1">Departure Time</label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["Morning", "Afternoon", "Evening", "Night"].map(time => (
                        <Button 
                          key={time} 
                          variant="outline" 
                          size="sm" 
                          className="rounded-full flex items-center gap-1"
                        >
                          <Clock className="h-3 w-3" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button 
            variant="link" 
            className="text-primary/80 hover:text-primary flex items-center transition-all text-base hover:underline decoration-wavy underline-offset-4 group"
            onClick={toggleAdvancedOptions}
          >
            {showAdvancedOptions ? "Hide Advanced Options" : "View Advanced Options"}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${showAdvancedOptions ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border/50 flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="ghost" size="sm" className="rounded-full bg-muted/50 hover:bg-muted">Popular Routes</Button>
          <Button variant="ghost" size="sm" className="rounded-full bg-muted/50 hover:bg-muted">Weekend Getaways</Button>
          <Button variant="ghost" size="sm" className="rounded-full bg-muted/50 hover:bg-muted">Special Trains</Button>
          <Button variant="ghost" size="sm" className="rounded-full bg-muted/50 hover:bg-muted">Tourism Packages</Button>
        </div>
      </div>
    </div>
  );
}
