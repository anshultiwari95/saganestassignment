import React from 'react';
import { Button } from '../index.jsx';

const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Simple Button Examples</h2>
      
      {/* Basic Button */}
      <div>
        <Button>Click Me</Button>
      </div>
      
      {/* Button with Icon */}
      <div>
        <Button 
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          }
        >
          Add Item
        </Button>
      </div>
      
      {/* Button with Image */}
      <div>
        <Button 
          icon={
            <img 
              src="/next.svg" 
              alt="Next.js" 
              className="w-4 h-4" 
            />
          }
        >
          Built with Next.js
        </Button>
      </div>
      
      {/* Button with Click Handler */}
      <div>
        <Button onClick={() => alert('Button clicked!')}>
          Click Handler
        </Button>
      </div>
      
      {/* Disabled Button */}
      <div>
        <Button disabled>Disabled</Button>
      </div>
      
      {/* Custom Styling */}
      <div>
        <Button className="bg-red-500 hover:bg-red-600">
          Custom Color
        </Button>
      </div>
    </div>
  );
};

export default ButtonExamples;
