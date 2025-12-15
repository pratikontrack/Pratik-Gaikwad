import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCompleted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {completed ? (
             <div className="flex flex-col items-center text-center py-12">
             <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
               <CheckCircle className="text-emerald-500" size={32} />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
             <p className="text-zinc-400">
               Our team will review your system audit request. <br/>Expect a response within 48 hours if you qualify.
             </p>
             <button 
               onClick={onClose}
               className="mt-8 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors"
             >
               Return to Dashboard
             </button>
           </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Step {step} of 3</span>
                <div className="h-1 w-full bg-zinc-800 mt-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300 ease-out" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-bold text-white">Qualification Check</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Current Monthly Revenue</label>
                      <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                        <option>Less than $1k/mo</option>
                        <option>$1k - $5k/mo</option>
                        <option>$5k - $20k/mo</option>
                        <option>$20k+/mo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Content Niche</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Finance, Fitness, Trading..." 
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button 
                      type="button" 
                      onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-2 bg-white text-black hover:bg-zinc-200 rounded-lg font-medium transition-colors"
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-bold text-white">System Needs</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Primary Bottleneck</label>
                      <div className="space-y-2">
                        {['Not enough leads', 'Leads are low quality', 'Manual follow-up takes too long', 'High tech overwhelm'].map((opt) => (
                          <label key={opt} className="flex items-center gap-3 p-3 border border-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-800/50 transition-colors">
                            <input type="radio" name="bottleneck" className="w-4 h-4 text-blue-500 bg-zinc-900 border-zinc-700" />
                            <span className="text-sm text-zinc-300">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-between">
                     <button 
                      type="button" 
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-2 text-zinc-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-2 bg-white text-black hover:bg-zinc-200 rounded-lg font-medium transition-colors"
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-xl font-bold text-white">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">First Name</label>
                        <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Last Name</label>
                        <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Work Email</label>
                      <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-1">Instagram / YouTube URL</label>
                      <input type="url" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-blue-900/10 border border-blue-900/30 rounded-lg">
                    <AlertCircle className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-xs text-blue-200/70">
                        We only accept 4 new partners per month to ensure quality. A booking link will be sent if your application is approved.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button 
                      type="button" 
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-2 text-zinc-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg font-bold transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Submit Application'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;