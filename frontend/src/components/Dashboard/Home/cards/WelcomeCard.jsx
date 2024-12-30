import React from 'react';
import { Users } from 'lucide-react';

const WelcomeCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-primary-400 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">
            Welcome Back, Teacher!
          </h2>
          <p className="text-primary-100">
            Your students are doing great!
            <span className="mx-1 font-bold text-white">60%</span>
            have completed their exams.
          </p>
        </div>
        <div className="hidden md:block">
          <Users className="h-24 w-24 text-primary-200/50" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-500/20" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary-500/20" />
    </div>
  );
};

export default WelcomeCard;
