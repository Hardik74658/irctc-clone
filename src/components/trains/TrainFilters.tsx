
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TrainFilters() {
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [departureTimeRange, setDepartureTimeRange] = useState([0, 24]);
  const [showAvailable, setShowAvailable] = useState(true);
  
  const formatTimeDisplay = (value: number) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };
  
  return (
    <Card>
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      
      <CardContent className="px-4 pb-4 pt-0 space-y-6">
        {/* Price Range Filter */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Price Range</h4>
          <Slider 
            defaultValue={[0, 3000]} 
            max={5000}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
        
        {/* Departure Time Filter */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Departure Time</h4>
          <Slider 
            defaultValue={[0, 24]} 
            max={24}
            step={0.5}
            value={departureTimeRange}
            onValueChange={setDepartureTimeRange}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatTimeDisplay(departureTimeRange[0])}</span>
            <span>{formatTimeDisplay(departureTimeRange[1])}</span>
          </div>
        </div>
        
        {/* Train Types Filter */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Train Types</h4>
          <div className="space-y-2">
            {["Rajdhani Express", "Shatabdi Express", "Duronto Express", "Garib Rath", "Superfast", "Passenger"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={`train-type-${type}`} />
                <Label htmlFor={`train-type-${type}`} className="text-sm">{type}</Label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Class Types Filter */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Class Types</h4>
          <div className="space-y-2">
            {["AC First Class (1A)", "AC 2 Tier (2A)", "AC 3 Tier (3A)", "Sleeper (SL)", "Second Sitting (2S)"].map((cls) => (
              <div key={cls} className="flex items-center space-x-2">
                <Checkbox id={`class-type-${cls}`} />
                <Label htmlFor={`class-type-${cls}`} className="text-sm">{cls}</Label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Only show available seats */}
        <div className="flex items-center justify-between">
          <Label htmlFor="available-seats" className="text-sm">Show only available seats</Label>
          <Switch 
            id="available-seats"
            checked={showAvailable}
            onCheckedChange={setShowAvailable}
          />
        </div>
        
        {/* Reset and Apply Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button variant="outline" size="sm">Reset All</Button>
          <Button size="sm">Apply</Button>
        </div>
      </CardContent>
    </Card>
  );
}
