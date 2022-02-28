import React from "react";

export default function FAQs() {
  return (
    <section id="faq" class="py-20 border-white border-t 2xl:py-40 bg-black">
      <div class="container px-4 mx-auto">
        <div class="mb-20 text-center">
          <h2 class="mt-8 text-7xl text-blue-50 font-bold font-heading">
            FAQ&apos;s
          </h2>
        </div>
        <div class="max-w-4xl mx-auto">
          <ul>
            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span
                    style={{
                      backgroundColor: "#ff6b6b",
                    }}
                    class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full"
                  >
                    1
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">
                      What Is Kamui
                    </h3>
                    <span class="ml-4"></span>
                  </div>
                  <div class="mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="mb-5 text-xl">
                     A collection of divine mortals preparing for the Armageddon.
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span
                    style={{
                      backgroundColor: "#ff6b6b",
                    }}
                    class="flex items-center justify-center w-12 h-12 text-lg font-bold rounded-full"
                  >
                    2
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">What is Supply</h3>
                    <span class="ml-4"></span>
                  </div>
                  <div class="mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="mb-5 text-xl">
                        The total supply will be 555
                    </p>
                  </div>
                </div>
              </button>
            </li>

            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span
                    style={{
                      backgroundColor: "#ff6b6b",
                    }}
                    class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full"
                  >
                    3
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">
                      What is the mint price
                    </h3>
                    <span class="ml-4"></span>
                  </div>
                  <div class="mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="mb-5 text-xl">
                        0.5 Sol
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span
                    style={{
                      backgroundColor: "#ff6b6b",
                    }}
                    class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full"
                  >
                    3
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">
                      Wen mint
                    </h3>
                    <span class="ml-4"></span>
                  </div>
                  <div class="mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="mb-5 text-xl">
                        3rd March 2022
                    </p>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
