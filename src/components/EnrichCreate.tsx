import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import EnrichBanner2 from './EnrichBanner2';
import imgJpeg from '../assets/img.jpg';

interface Activity {
  id: string;
  name: string;
  description?: string;
  img?: string;
}

interface Category {
  id: string;
  name: string;
  activities: Activity[];
}

const EnrichCreate: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(new Set());

  const categories: Category[] = [
    {
      id: 'engagement',
      name: 'E - Engagement',
      activities: [
        { id: 'gameathon', name: 'Game-a-thon (reimagined team-building)', img: "img.jpg" },
        { id: 'collaborative-games', name: 'Collaborative Games', img: "img.jpg" },
        { id: 'drumming-circle', name: 'Drumming Circle', img: "img.jpg" },
        { id: 'improv-laughter', name: 'Improv & Laughter Labs', img: "img.jpg" },
        { id: 'human-library', name: 'Human Library', img: "img.jpg" },
        { id: 'story-circles', name: 'Story Circles', img: "img.jpg" }
      ]
    },
    {
      id: 'nourishment',
      name: 'N - Nourishment',
      activities: [
        { id: 'medicine-free-life', name: 'Medicine Free Life', img: "img.jpg" },
        { id: 'breakfast-conversations', name: 'Breakfast Conversations', img: "img.jpg" },
        { id: 'soulful-lunches', name: 'Soulful Lunches', img: "img.jpg" },
        { id: 'high-tea-reflection', name: 'High Tea with Reflection Prompts', img: "img.jpg" },
        { id: 'gigs-music-dinners', name: 'Gigs & Music Dinners', img: "img.jpg" }
      ]
    },
    {
      id: 'regulation',
      name: 'R - Regulation Cards',
      activities: [
        { id: 'yoga-meditation', name: 'Yoga & Meditation', img: "img.jpg" },
        { id: 'somatic-movement', name: 'Somatic Movement', img: "img.jpg" },
        { id: 'body-scan-mindfulness', name: 'Body Scan & Mindfulness Practice', img: "img.jpg" },
        { id: 'breath-stretch', name: 'Breath & Stretch Micro-Sessions', img: "img.jpg" },
        { id: 'forest-bathing', name: 'Forest Bathing (venue-dependent)', img: "img.jpg" }
      ]
    },
    {
      id: 'leadership',
      name: 'I - Innovative Leadership Cards',
      activities: [
        { id: 'leadership-activation', name: 'Leadership Activation' , img :"img.jpg"},
        { id: 'conscious-communication', name: 'Conscious Communication Circles', img: "img.jpg" },
        { id: 'founders-fire', name: "Founders' Fire", img: "img.jpg" },
        { id: 'peer-led-reflection', name: 'Peer-Led Reflection Spaces', img: "img.jpg" },
        { id: 'purpose-clarity', name: 'Purpose & Clarity Workshops', img: "img.jpg" }
      ]
    },
    {
      id: 'creativity',
      name: 'C - Creativity Cards',
      activities: [
        { id: 'art-attack', name: 'Art Attack (Expressive Arts Therapy)', img: "img.jpg" },
        { id: 'free-dance', name: 'Free Dance Movement', img: "img.jpg" },
        { id: 'music-colour-therapy', name: 'Music & Colour Therapy', img: "img.jpg" },
        { id: 'open-mic', name: 'Open Mic Night (Comedy, Poetry, Music)', img: "img.jpg" },
        { id: 'journaling-reflection', name: 'Journaling & Reflection Workshops', img: "img.jpg" },
        { id: 'vision-boards', name: 'DIY Vision Boards', img: "img.jpg" }
      ]
    },
    {
      id: 'healing',
      name: 'H - Healing Cards',
      activities: [
        { id: 'sound-healing', name: 'Sound Healing', img: "img.jpg" },
        { id: 'heal-your-life', name: 'Heal Your Life', img: "img.jpg" },
        { id: 'inner-child', name: 'Inner Child Workshop', img: "img.jpg" },
        { id: 'past-life-regression', name: 'Past Life Regression', img: "img.jpg" },
        { id: 'sociometry', name: 'Sociometry (Chakrasutra)', img: "img.jpg" },
        { id: 'power-of-fire', name: 'Power of Fire (Release Ritual)', img: "img.jpg" }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleActivity = (activityId: string) => {
    const newSelected = new Set(selectedActivities);
    if (newSelected.has(activityId)) {
      newSelected.delete(activityId);
    } else {
      newSelected.add(activityId);
    }
    setSelectedActivities(newSelected);
  };

  const handleCreatePlan = () => {
    const selectedActivitiesList = Array.from(selectedActivities);
    console.log('Creating plan with activities:', selectedActivitiesList);
    // Here you would typically send the data to your backend or state management
    alert(`Plan created with ${selectedActivitiesList.length} activities!`);
  };

  const handleNextCategory = (currentCategoryId: string) => {
    const currentIndex = categories.findIndex(cat => cat.id === currentCategoryId);
    if (currentIndex < categories.length - 1) {
      const nextCategoryId = categories[currentIndex + 1].id;
      setExpandedCategory(nextCategoryId);
    }
  };

  return (
    <section id="enrich-create" className="py-20 px-2 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100 ">
      <div className="container-custom">
        <EnrichBanner2/>

        <div className="max-w-4xl mx-auto">
          {/* Categories Accordion */}
          <div className="text-center mb-8">
          <h2 className="text-[24px] md:text-5xl font-serif font-bold text-gray-900 mb-6 text-left">
          Design Your Program
          </h2>
        </div>
          <div className="space-y-4 mb-12">
            {categories.map((category) => (
              <div
                key={category.id}
                className=" bg-[#FFF6ED] rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 text-left bg-[#FFF6ED] text-white font-semibold text-lg flex items-center justify-between transition-all duration-300"
                >
                  <span className='text-[#F27063]'>{category.name}</span>
                  {expandedCategory === category.id ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>

                {/* Activities List */}
                {expandedCategory === category.id && (
                  <div className="p-2 bg-[#FFF6ED]">
                    <div className="grid grid-cols-2 gap-1">
                      {category.activities.map((activity) => (
                        <button
                          key={activity.id}
                          onClick={() => toggleActivity(activity.id)}
                          className={`h-24 p-6 rounded-xl border-2 transition-all duration-300 text-left flex items-center justify-between relative overflow-hidden ${
                            selectedActivities.has(activity.id)
                              ? 'border-primary-500 bg-primary-50 text-primary-900'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-25'
                          }`}
                          style={{
                            backgroundImage: activity.img ? `url(${imgJpeg})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                          <div className="relative z-10 flex items-center justify-between w-full">
                            <span className="font-medium text-[16px] text-white drop-shadow-lg">
                              {(() => {
                                const match = activity.name.match(/^(.+?)\s*\(([^)]+)\)$/);
                                if (match) {
                                  const [, mainText, parentheticalText] = match;
                                  return (
                                    <>
                                      {mainText.trim()}{' '}
                                      <span className="text-sm">({parentheticalText})</span>
                                    </>
                                  );
                                }
                                return activity.name;
                              })()}
                            </span>
                            {/* {selectedActivities.has(activity.id) && (
                              <Check size={20} className="text-white drop-shadow-lg" />
                            )} */}
                          </div>
                        </button>
                      ))}
                    </div><div className='w-full flex justify-end mr-1'>
                    <button 
                      onClick={() => handleNextCategory(category.id)}
                      className='bg-[#FFF6ED] text-black border-[1px] border-black px-4 py-1 rounded-full text-[12px] mt-2 hover:bg-[#F27063] hover:text-white transition-colors duration-200'
                    >
                      Next
                    </button>
                        
                        </div>                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Selected Activities Summary */}
          {selectedActivities.size > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Selected Activities ({selectedActivities.size})
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(selectedActivities).map((activityId) => {
                  const activity = categories
                    .flatMap(cat => cat.activities)
                    .find(act => act.id === activityId);
                  return (
                    <span
                      key={activityId}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {activity?.name}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Create Plan Button */}
          <div className="text-center">
            <button
              onClick={handleCreatePlan}
              disabled={selectedActivities.size === 0}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                selectedActivities.size > 0
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
            Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrichCreate;