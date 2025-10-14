import React from 'react';

function FontVariantNumeric() {
  return (
    <div className="  w-full flex flex-col items-center justify-center gap-4 mb-4">
      <h2 className=" text-[medium] font-bold rounded-full bg-sky-600/30 outline-1 outline-sky-500  px-4">
        font-variant-numeric
      </h2>
      <h2 className=" w-1/2 flex flex-col items-center text-vsm">
        Utilities for controlling the variant of numbers.
      </h2>
      {/* Using ordinal glyphs*/}
      <h2 className="underline">Using ordinal glyphs</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'ordinal' utility to enable special glyphs for the ordinal
        markers in fonts that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">ordinal</h2>
        <h2 className=" font-mono text-xl ordinal text-gray-300 ">4th</h2>
      </div>
      {/* Using slashed zeroes*/}
      <h2 className="underline">Using slashed zeroes</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'slashed-zero' utility to force a zero with a slash in fonts
        that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">ordinal</h2>
        <h2 className=" font-mono slashed-zero text-xl  text-gray-300 ">000</h2>
      </div>
      {/* Using lining figures*/}
      <h2 className="underline">Using lining figures</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'lining-nums' utlity to use numeric glyphs that are aligned by
        their baseline in fonts that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">lining-nums</h2>
        <h2 className="lining-nums font-sans text-gray-300 ">1234567890</h2>
      </div>
      {/* Using lining figures*/}
      <h2 className="underline">Using oldstyle-nums</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'oldstyle-nums' utility to use numeric glyphs where some numders
        have descenders in fonts that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">oldstyle-nums</h2>
        <h2 className="oldstyle-nums text-xl font-serif text-gray-300 ">
          1234567890
        </h2>
      </div>
      {/* Using proportional figures*/}
      <h2 className="underline">Using proportional figures</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'proportional-nums' utility to use numeric glyphs that have
        proportional widths in font that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">proportional-nums</h2>
        <h2 className="proportional-nums text-xl font-serif text-gray-300 ">
          12121
        </h2>
        <h2 className="proportional-nums text-xl font-serif text-gray-300 ">
          90909
        </h2>
      </div>
      {/* Using tabular figures*/}
      <h2 className="underline">Using tabular figures</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'tabular-nums' utility to use numeric glyphs that have
        uniform/tabular widths in fonts that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">tabular-nums</h2>
        <h2 className="tabular-nums text-xl font-mono text-gray-300 ">12121</h2>
        <h2 className="tabular-nums text-xl font-sans text-gray-300 ">90909</h2>
      </div>
      {/* Using diagonal fractions*/}
      <h2 className="underline">Using diagonal fractions </h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'diagonal-fractions' utility to replace numbers separated by a
        slash with common diagnosed fractions in fonts that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">diagonal fractions</h2>
        <h2 className="diagonal-fractions text-xl font-sans text-gray-300 ">
          1/2 3/4 5/6
        </h2>
      </div>
      {/* Using stacked fractions*/}
      <h2 className="underline">Using stacked fractions </h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'stacked-fractions' utility to replace numbers separated by a
        slash with common stacked fractions in fonts that support them:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm">stacked fractions</h2>
        <h2 className="stacked-fractions text-xl font-sans text-gray-300 ">
          1/2 3/4 5/6
        </h2>
      </div>
      {/* Resetting numeric font variants*/}
      <h2 className="underline">Ressetting numeric font variants</h2>
      <h2 className="w-1/2 text-vsm">
        Use the 'normal-nums' property to reset numeric font variants:
      </h2>
      <div className="flex rounded-[0.4em] flex-col items-center w-1/2 bg-gray-950  gap-0 5">
        <h2 className=" text-gray-400  text-vsm"> normal nums</h2>
        <h2 className="normal-nums uppercase text-xl font-sans text-gray-300 ">
          1/2 3/4 5/6
        </h2>
      </div>
    </div>
  );
}

export default FontVariantNumeric;
