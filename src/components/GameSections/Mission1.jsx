
import React, { useState, useEffect } from 'react';
import LinaSadSVG from "../../assets/images/Lina-sad.svg";
import GameBG from "../../assets/images/Game_BG.png";
import Tear1SVG from "../../assets/images/tear1.svg";
import Tear1SVG2 from "../../assets/images/tear1-2.svg";
import Tear2YSVG from "../../assets/images/tear2Y.svg";
import Tear3YSVG from "../../assets/images/tear3Y.svg";
import Tear1YSVG from "../../assets/images/tear1Y.svg";
import Tear1YRSVG from "../../assets/images/tear1YR.svg";
import Tear2SVG from "../../assets/images/tear2.svg";
import Tear3SVG from "../../assets/images/tear3.svg";
import CompletionModal from '../CompletionModal';
import LinaHappy from "../../assets/images/Lina-happy.png";


const Mission1 = ({ onNext, onGoBack }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [repairedTears, setRepairedTears] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [score, setScore] = useState(0);
  

  // Map tear IDs to their SVG files
  const tearSVGs = {
    'tear1': Tear1SVG,
    'tear1-2': Tear1SVG2, 
    'tear2': Tear2SVG,
    'tear3': Tear3SVG,
  };

  const patchSVGs = {
    'patch1': Tear1YSVG,
    'patch2': Tear1YRSVG, 
    'patch3': Tear2YSVG,
    'patch4': Tear3YSVG,
  };



  const [currentTears, setCurrentTears] = useState(() => [
    { id: 'tear1', tearId: 'tear1_1', x: 183, y: 258, type: 'small', repaired: false, scale: 0.4 },
    { id: 'tear1-2', tearId: 'tear1_2', x: 238, y: 398, type: 'small', repaired: false, scale: 0.59 },
    { id: 'tear2', tearId: 'tear2_1', x: 168, y: 360, type: 'medium', repaired: false , scale: 0.65},
    { id: 'tear3', tearId: 'tear3_1', x: 220, y: 300, type: 'small', repaired: false, scale: 0.8},
  ]);
  const [availablePatches, setAvailablePatches] = useState(() => [
    { patchId: 'patch1', targetTearId: 'tear1_1', id: 'tear1', type: 'small', color: '#FFD700', used: false },
    { patchId: 'patch2', targetTearId: 'tear1_2', id: 'tear1-2', type: 'small', color: '#FFD700', used: false },
    { patchId: 'patch3', targetTearId: 'tear2_1', id: 'tear2', type: 'medium', color: '#FF69B4', used: false },
    { patchId: 'patch4', targetTearId: 'tear3_1', id: 'tear3', type: 'small', color: '#98FB98', used: false },
  ]);

  // Handle drag start
  const handleDragStart = (e, patch) => {
    if (patch.used) return;
    setDraggedItem(patch);
    e.dataTransfer.effectAllowed = 'move';
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  // Handle drop on tear
  const handleDrop = (e, tearTarget) => {
    e.preventDefault();
    
    console.log('Drop event:', { draggedItem, tearTarget }); // Debug log
    
    if (!draggedItem || tearTarget.repaired) {
      console.log('Drop rejected: no draggedItem or tear already repaired');
      setDraggedItem(null);
      return;
    }

    // Check if patch targets this specific tear
    if (draggedItem.targetTearId === tearTarget.tearId) {
      console.log('Match found!', draggedItem.targetTearId, '===', tearTarget.tearId);
      
      // Find the specific tear index to mark as repaired
      const tearIndex = currentTears.findIndex(t => 
        t.tearId === tearTarget.tearId && 
        !t.repaired
      );
      
      console.log('Tear index found:', tearIndex);
      
      if (tearIndex !== -1) {
        // Mark specific tear as repaired
        setCurrentTears(prev => 
          prev.map((t, index) => 
            index === tearIndex ? { ...t, repaired: true, patchColor: draggedItem.color } : t
          )
        );

        // Find and mark the dragged patch as used
        setAvailablePatches(prev => {
          // Find the exact patch that was dragged using patchId
          return prev.map(p => 
            p.patchId === draggedItem.patchId ? { ...p, used: true } : p
          );
        });

        // Update repaired tears count
        setRepairedTears(prev => [...prev, `${tearTarget.id}_${tearIndex}`]);
        setScore(prev => prev + 10);

        console.log('Repair successful!');
      }
    } else {
      console.log('No match:', draggedItem.targetTearId, '!==', tearTarget.tearId);
    }

    setDraggedItem(null);
  };

  // Check if game is completed
  useEffect(() => {
    if (repairedTears.length === 4) { // 4 total tears to repair
      setGameCompleted(true);
      // Show completion modal after a short delay
      setTimeout(() => {
        setShowCompletion(true);
      }, 1000);
    }
  }, [repairedTears]);

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-no-repeat bg-center h-screen">
        <img
          src={GameBG}
          alt="Game background"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Game Content */}
      <section className="h-full w-full flex flex-col items-center justify-center relative">
        <div className="z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
          
          {/* Game Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold winky-font mb-4 text-[#1E1E1E]">
              Repair Lina's Dress
            </h2>
            <p className="text-lg text-[#1E1E1E] mb-2">
              Help Lina fix her broken dress by dragging patches to the spots that need repair.
            </p>
            <p className="text-base text-[#1E1E1E]">
              Can you repair her outfit and give it a second life?
            </p>
            <div className="mt-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 border-2 border-[#B30047]">
              <p className="text-lg font-bold text-[#B30047] winky-font">
                Repairs: {repairedTears.length}/4
              </p>
            </div>
          </div>

          {/* Game Area */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            
            {/* Lina Character with Tears */}
            <div className="relative">
              <img 
                src={LinaSadSVG} 
                alt="Lina with torn dress" 
                className="w-96 h-auto"
              />
              
              {/* Tear Drop Zones */}
              {currentTears.map((tear) => (
                <div
                  key={tear.tearId}
                  className="absolute transition-all duration-300 cursor-pointer"
                  style={{
                    left: `${tear.x}px`,
                    top: `${tear.y}px`,
                    width: tear.type === 'small' ? '40px' : '60px',
                    height: tear.type === 'small' ? '40px' : '60px',
                    transform: `translate(-50%, -50%) ${tear.scale ? `scale(${tear.scale})` : ''}`,
                  }}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, tear)}
                >
                  {/* Show patch if repaired */}
                  {tear.repaired ? (
                    <div className="relative w-full h-full">
                      {/* Patch overlay */}
                      <div 
                        className="absolute inset-0 rounded-full flex items-center justify-center drop-shadow-lg border-4 border-green-500"
                        style={{ backgroundColor: tear.patchColor }}
                      >
                        <svg
                          width="40%"
                          height="40%"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={tearSVGs[tear.id]}
                      alt={`${tear.id} damage`}
                      className="w-full h-full hover:scale-110 transition-transform duration-200"
                    />
                  )}
                  
                  {/* Drop zone indicator */}
                  {!tear.repaired && (
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-400 opacity-0 hover:opacity-60 transition-opacity duration-200 bg-red-50"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Patches Panel - Right Side */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold winky-font mb-4 text-[#1E1E1E] text-center">
                Repair Patches
              </h3>
              <p className="text-sm text-[#1E1E1E] mb-4 text-center">
                Drag patches to matching tears
              </p>
              
              <div className="flex flex-col gap-4">
                {availablePatches.map((patch) => (
                  <div
                    key={patch.patchId}
                    className={`w-20 h-20 cursor-pointer transition-all duration-300 ${
                      patch.used 
                        ? 'opacity-30 cursor-not-allowed' 
                        : ''
                    }`}
                    draggable={!patch.used}
                    onDragStart={(e) => handleDragStart(e, patch)}
                  >
                    <div className="relative w-full h-full">
                      {/* Patch base circle */}
                      <div 
                        className={`w-full h-full rounded-full border-4 border-gray-400 flex items-center justify-center relative bg-white ${
                          patch.used ? 'opacity-50' : ''
                        }`}
                      >
                        {/* Patch content */}
                        {patch.used ? (
                          <svg
                            width="50%"
                            height="50%"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-green-600"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <div className="flex flex-col items-center">
                            {/* Small preview of the patch SVG */}
                            <img
                              src={patchSVGs[patch.patchId]}
                              alt={patch.patchId}
                              className="w-8 h-8 mb-1 opacity-80"
                            />
                            <span className="text-gray-800 text-xs font-bold">
                              {patch.patchId}
                            </span>
                          </div>
                        )}
                        
                        {/* Shine effect */}
                        {!patch.used && (
                          <div className="absolute top-2 left-2 w-4 h-6 bg-white opacity-30 rounded-full transform -rotate-45"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Instructions */}
              <div className="mt-4 text-xs text-gray-600 text-center">
                <p>Drag each patch to its matching tear</p>
                <p className="text-green-500">🟢 Match patch type to tear type</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completion Modal */}
      <CompletionModal
        isVisible={showCompletion}
        title="Great Job!"
        message="You helped Lina repair her dress."
        onGoBack={onGoBack}
        onNext={onNext}
        backButtonText="Go back to Mission 1"
        nextButtonText="Next"
        showBackButton={true}
        showNextButton={true}
        characterImage={LinaHappy}
      />
    </>
  );
};

export default Mission1;