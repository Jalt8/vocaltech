import React, { useState } from 'react';
import { Mic, Play, Pause } from 'lucide-react';

const DemoPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleRecording = () => setIsRecording(!isRecording);
  const togglePlaying = () => setIsPlaying(!isPlaying);

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16">Experience VocalTech AI</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <p className="text-xl mb-8">
            Try out our voice AI technology right here! Record a short message, and our AI will analyze and respond to it.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <button 
              onClick={toggleRecording}
              className={`flex items-center justify-center w-16 h-16 rounded-full ${isRecording ? 'bg-red-500' : 'bg-blue-500'} text-white transition duration-300`}
            >
              <Mic className="w-8 h-8" />
            </button>
            
            <button 
              onClick={togglePlaying}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white transition duration-300"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </button>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-semibold mb-2">AI Response:</p>
            <p className="text-gray-700">
              {isRecording ? "Listening..." : "Record a message to see the AI response here."}
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-xl mb-8">
            Contact us for a full demonstration of our voice AI capabilities tailored to your business needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Request Full Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;