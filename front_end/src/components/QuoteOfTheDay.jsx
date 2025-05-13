"use client";

import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '600'],
  display: 'swap',
});

const QuoteOfTheDay = () => {
  const today = new Date();
  const date = today.getDate();
  
  const [Quote, setQuote] = useState({quote:"Loading..", author:" "});
  
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        try {
          const response = await fetch(
            "https://www.stands4.com/services/v2/quotes.php?uid=13011&tokenid=6pwyoQ4HZQevLI4z&searchtype=RANDOM&format=json",
            {
              method: "GET",
              timeout: 5000 // 5 second timeout
            }
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! status ${response.status}`);
          }
          
          const data = await response.json();
          if (!data || !data.result || !data.result.quote) {
            throw new Error('Invalid response data');
          }

          localStorage.setItem("quoteData", data.result);
          setQuote(localStorage.getItem("quoteData"));
          
        } catch (error) {
          console.error('Error in fetch operation:', error);
          throw error; // Re-throw to be caught by outer try-catch
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote({quote: "Failed to load quote", author: "System"});
      }
    };

    const quoteData = localStorage.getItem('quoteData');

    if (!quoteData) {
      fetchQuote();
    }

  }, [date]);

  return (
    <>
    {
      Quote.quote === 'Loading..' ? 
        <div className={`${poppins.className} relative h-full w-full flex flex-col items-center text-md border bg-[#92bdfddd] border-[#BFBFBF] p-2 rounded-md`}>
        {/* Header Section */}
        <div className=" flex items-center justify-center bg-[#ffffff00] rounded-md w-full px-4 py-1 h-10">
          <h2>Quote of the day</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-end justify-center px-8 w-full h-full space-y-2 animate-pulse">
          <div className="h-6 w-full bg-gray-200 rounded-md"></div>
          <div className="h-4 w-1/3 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      :
      <div className={`${poppins.className} relative h-full w-full flex flex-col items-center text-md border bg-[#92bdfddd] border-[#BFBFBF] p-2 rounded-md`}>
        <div className=" flex items-center justify-center bg-[#ffffff00] rounded-md w-full px-4 py-1 h-10">
          <h2>Quote of the day</h2>
        </div>
        {
          <div className="flex flex-col items-end text-center my-auto text-[1.2rem] text-[#ffffff] px-8">
            <h2>{Quote.quote || "Today is your best day."}</h2>
            <h3 className=" text-[.9rem]">
              ~ {Quote.author || 'By me'}
            </h3>
          </div>
        }
      </div>
      }
    </>
  );
};

export default QuoteOfTheDay;
