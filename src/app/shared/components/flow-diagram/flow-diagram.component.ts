import { Component } from '@angular/core';
import { RiskTagComponent } from "../risk-tag/risk-tag.component";

@Component({
  selector: 'app-flow-diagram',
  standalone: true,
  imports: [RiskTagComponent],
  template: `
    <div class="max-w-7xl mx-auto bg-gray-50 rounded-md p-6 lg:px-8">

        <div class="flow-container">
            <div class="flow-diagram">
                
                <!-- 1. Node: Loremipsumm (Icon Node) -->
                <div class="node-wrapper relative group flex flex-col items-center flex-shrink-0 w-24">
                    <div class="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center relative">
                      <svg class="absolute top-0 right-0" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="10.5" fill="#7A44FF" stroke="#FAFAFA"/>
                        <mask id="mask0_1_425" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="5" y="3" width="14" height="14">
                        <rect x="5.00024" y="3.99988" width="13" height="13" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_1_425)">
                        <path d="M5.54175 14.8334V13.3167C5.54175 13.0098 5.62074 12.7277 5.77873 12.4704C5.93671 12.2131 6.14661 12.0167 6.40841 11.8813C6.96814 11.6015 7.53689 11.3916 8.11466 11.2516C8.69244 11.1117 9.27925 11.0417 9.87508 11.0417C10.4709 11.0417 11.0577 11.1117 11.6355 11.2516C12.2133 11.3916 12.782 11.6015 13.3417 11.8813C13.6036 12.0167 13.8134 12.2131 13.9714 12.4704C14.1294 12.7277 14.2084 13.0098 14.2084 13.3167V14.8334H5.54175ZM15.2917 14.8334V13.2084C15.2917 12.8112 15.1812 12.4298 14.96 12.0641C14.7388 11.6985 14.4251 11.3848 14.0188 11.123C14.4792 11.1772 14.9126 11.2697 15.3188 11.4006C15.7251 11.5315 16.1042 11.6917 16.4563 11.8813C16.7813 12.0619 17.0296 12.2628 17.2011 12.4839C17.3727 12.7051 17.4584 12.9466 17.4584 13.2084V14.8334H15.2917ZM9.87508 10.5001C9.27925 10.5001 8.76918 10.2879 8.34487 9.86362C7.92057 9.43932 7.70841 8.92925 7.70841 8.33341C7.70841 7.73758 7.92057 7.22751 8.34487 6.80321C8.76918 6.3789 9.27925 6.16675 9.87508 6.16675C10.4709 6.16675 10.981 6.3789 11.4053 6.80321C11.8296 7.22751 12.0417 7.73758 12.0417 8.33341C12.0417 8.92925 11.8296 9.43932 11.4053 9.86362C10.981 10.2879 10.4709 10.5001 9.87508 10.5001ZM15.2917 8.33341C15.2917 8.92925 15.0796 9.43932 14.6553 9.86362C14.231 10.2879 13.7209 10.5001 13.1251 10.5001C13.0258 10.5001 12.8994 10.4888 12.7459 10.4662C12.5924 10.4437 12.4661 10.4188 12.3667 10.3917C12.6105 10.1029 12.7978 9.78237 12.9287 9.43029C13.0596 9.07821 13.1251 8.71258 13.1251 8.33341C13.1251 7.95425 13.0596 7.58862 12.9287 7.23654C12.7978 6.88446 12.6105 6.56397 12.3667 6.27508C12.4931 6.22994 12.6195 6.2006 12.7459 6.18706C12.8723 6.17352 12.9987 6.16675 13.1251 6.16675C13.7209 6.16675 14.231 6.3789 14.6553 6.80321C15.0796 7.22751 15.2917 7.73758 15.2917 8.33341ZM6.62508 13.7501H13.1251V13.3167C13.1251 13.2174 13.1003 13.1272 13.0506 13.0459C13.0009 12.9647 12.9355 12.9015 12.8542 12.8563C12.3667 12.6126 11.8747 12.4298 11.3782 12.3079C10.8817 12.186 10.3806 12.1251 9.87508 12.1251C9.36953 12.1251 8.86848 12.186 8.37196 12.3079C7.87543 12.4298 7.38341 12.6126 6.89591 12.8563C6.81466 12.9015 6.74921 12.9647 6.69956 13.0459C6.64991 13.1272 6.62508 13.2174 6.62508 13.3167V13.7501ZM9.87508 9.41675C10.173 9.41675 10.428 9.31067 10.6402 9.09852C10.8523 8.88637 10.9584 8.63133 10.9584 8.33341C10.9584 8.0355 10.8523 7.78046 10.6402 7.56831C10.428 7.35616 10.173 7.25008 9.87508 7.25008C9.57716 7.25008 9.32213 7.35616 9.10998 7.56831C8.89782 7.78046 8.79175 8.0355 8.79175 8.33341C8.79175 8.63133 8.89782 8.88637 9.10998 9.09852C9.32213 9.31067 9.57716 9.41675 9.87508 9.41675Z" fill="white"/>
                        </g>
                        </svg>

                        <img src="assets/icons/mask.svg" alt="Venetian Mask Icon"  />
                    </div>
                    <span class="mt-1 text-xs font-medium text-gray-700">Loremipsumm</span>
                    
                    <!-- Popover 1 -->
                    <div class="popover absolute space-y-2 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-xs left-1/2 transform -translate-x-1/5">
                      <div class="relative space-y-2 !z-index-90">
                        <p class="block px-3 py-1 text-xs font-bold rounded-sm bg-red-50 text-red-700">
                          Lorem Ipsum Dolor Sit
                        </p>
                        @for(item of [1,2];  track $index) {
                          <div class="grid grid-cols-3 gap-2">
                            <p class="block px-3 py-1 text-xs font-bold rounded-sm bg-red-50 text-red-700">
                              1.2.3.4
                            </p>
                            <p class="block px-3 py-1 text-xs font-bold rounded-sm bg-red-50 text-red-700">
                              1.2.3.4
                            </p>
                            <p class="block px-3 py-1 text-xs font-bold rounded-sm bg-red-50 text-red-700">
                              1.2.3.4
                            </p>
                          </div>
                        }
                        <p class="block px-3 py-1 text-xs font-bold rounded-sm bg-info-50 text-info-700">
                          Lorem: 1.2.3.4
                        </p>
                      </div>
                    </div>
                </div>

                <!-- Connector 1 -->
                <img src="assets/icons/connector.svg" />


                <!-- 2. Node: Loremipsu (Server Node 1) -->
                <div class="node-wrapper relative group flex flex-col items-center flex-shrink-0 w-24">
                    <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <img src="assets/icons/server.svg" alt="Setting Icon" class="h-8 w-8" />
                    </div>
                    <span class="mt-1 text-xs font-medium text-gray-700">Loremipsu</span>
                    
                    <!-- Popover 2 -->
                    <div class="popover absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-xs left-1/2 transform -translate-x-1/2">
                      <div class="relative space-y-2 !z-index-90">
                        <div class="flex items-center space-x-3 col-span-1 ">
                          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                             <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_939)">
                              <path d="M4.92163 4.92165H4.92983M4.92163 14.7654H4.92983M3.28101 1.6404H16.406C17.3121 1.6404 18.0466 2.37493 18.0466 3.28102V6.56227C18.0466 7.46836 17.3121 8.2029 16.406 8.2029H3.28101C2.37491 8.2029 1.64038 7.46836 1.64038 6.56227V3.28102C1.64038 2.37493 2.37491 1.6404 3.28101 1.6404ZM3.28101 11.4841H16.406C17.3121 11.4841 18.0466 12.2187 18.0466 13.1248V16.406C18.0466 17.3121 17.3121 18.0466 16.406 18.0466H3.28101C2.37491 18.0466 1.64038 17.3121 1.64038 16.406V13.1248C1.64038 12.2187 2.37491 11.4841 3.28101 11.4841Z" stroke="#1873DE" stroke-width="1.64062" stroke-linecap="round" stroke-linejoin="round"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_939">
                              <rect width="19.6875" height="19.6875" fill="white"/>
                              </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                              <p class="text-xs font-medium text-gray-700 leading-tight">Loremipsumdolorsit</p>
                          </div>
                        </div>
                       
                        <div class="flex items-center font-bold">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1004)">
                            <path d="M8.75 5H5M10 7.5H5M8.125 10H5M2.5 1.25V13.75L3.75 13.125L5 13.75L6.25 13.125L7.5 13.75L8.75 13.125L10 13.75L11.25 13.125L12.5 13.75V1.25L11.25 1.875L10 1.25L8.75 1.875L7.5 1.25L6.25 1.875L5 1.25L3.75 1.875L2.5 1.25Z" stroke="#858D9D" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1004">
                            <rect width="15" height="15" fill="white"/>
                            </clipPath>
                            </defs>
                          </svg>
                        <span> Lorem: </span>
                        <span class="px-3 py-1 text-xs bg-warning-50 text-warning-700">Lorem “ipsum" </span>
                        </div>
                        <p class="block py-1 text-xs font-bold rounded-sm ">
                          lorem <span class="px-2 bg-info-50 text-info-700">1234,5678</span>
                        </p>
                      </div>
                    </div>
                </div>

                <!-- Connector 2 -->
                <img src="assets/icons/connector.svg" />

                <!-- 3. Node: Loremipsu (Server Node 2) -->
                <div class="node-wrapper relative group flex flex-col items-center flex-shrink-0 w-24">
                    <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <img src="assets/icons/server.svg" alt="Setting Icon" class="h-8 w-8" />
                    </div>
                    <span class="mt-1 text-xs font-medium text-gray-700">Loremipsu</span>
                    
                    <!-- Popover 3 -->
                    <div class="popover absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-xs left-1/2 transform -translate-x-1/2">
                       <div class="relative space-y-2 !z-index-90">
                        <div class="flex items-center space-x-3 col-span-1 ">
                          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <img src="assets/icons/server-sm.svg" alt="Setting Icon" />
                          </div>
                          <div>
                              <p class="text-xs font-medium text-gray-700 leading-tight">Loremipsumdolorsit</p>
                          </div>
                        </div>
                       
                        <div class="flex items-center font-bold">
                          <img src="assets/icons/file.svg" alt="Setting Icon" />
                        <span>Lorem: </span>
                        <span class="px-3 py-1 text-xs bg-warning-50 text-warning-700">Lorem “ipsum" </span>
                        </div>
                        <p class="block py-1 text-xs font-bold rounded-sm ">
                          lorem <span class="px-2 bg-info-50 text-info-700">1234,5678</span>
                        </p>
                      </div>
                    </div>
                </div>

                
                
                <!-- Branching SVG -->
                <div class="branch-lines flex items-center">
                  <svg width="208" height="110" viewBox="0 0 208 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M208 2.16504L204.25 4.3301L204.25 -2.45087e-05L208 2.16504ZM80.8318 55.5401L-3.57102e-06 55.54L-3.52084e-06 54.79L80.8318 54.7901L80.8318 55.5401ZM204.625 2.54004L144.795 2.54004L144.795 1.79004L204.625 1.79004L204.625 2.54004ZM127.503 10.8626L98.7098 46.9354L98.1236 46.4675L126.917 10.3947L127.503 10.8626ZM144.795 2.54004C138.066 2.54004 131.702 5.60295 127.503 10.8626L126.917 10.3947C131.258 4.95678 137.837 1.79004 144.795 1.79004L144.795 2.54004ZM80.8318 54.7901C87.5615 54.7901 93.9254 51.7271 98.1236 46.4675L98.7098 46.9354C94.3692 52.3733 87.7896 55.5401 80.8318 55.5401L80.8318 54.7901Z" fill="#858D9D"/>
                    <path d="M208 106.883L204.25 104.718L204.25 109.048L208 106.883ZM80.9605 54.5078L-3.50411e-06 54.5078L-3.45394e-06 55.2578L80.9605 55.2578L80.9605 54.5078ZM204.625 106.508L144.667 106.508L144.667 107.258L204.625 107.258L204.625 106.508ZM127.504 98.3456L98.7049 62.9467L98.1231 63.42L126.922 98.8189L127.504 98.3456ZM144.667 106.508C138.009 106.508 131.705 103.51 127.504 98.3456L126.922 98.8189C131.266 104.158 137.783 107.258 144.667 107.258L144.667 106.508ZM80.9605 55.2578C87.618 55.2578 93.9216 58.2557 98.1231 63.42L98.7049 62.9467C94.361 57.6073 87.8437 54.5078 80.9605 54.5078L80.9605 55.2578Z" fill="#858D9D"/>
                  </svg>
                </div>
                
                <div class="flex flex-col justify-between h-52 flex-shrink-0">
                    
                    <!-- 4. Final Node: Loremipsumdolorsit (Top) -->
                    <div class="node-wrapper relative group flex flex-col items-center flex-shrink-0 w-24">
                        <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center relative">
                          <svg class="absolute top-0 right-0" width="15" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="#E6372B"/>
                          <g clip-path="url(#clip0_1_717)">
                          <path d="M14.2358 10.4825L10.7635 14.2441M10.7635 10.4825L14.2358 14.2441M18.0552 13.1156C18.0552 16.8772 15.6246 18.758 12.7358 19.8489C12.5845 19.9044 12.4202 19.9017 12.2705 19.8413C9.37465 18.758 6.94409 16.8772 6.94409 13.1156V7.84944C6.94409 7.64992 7.01726 7.45856 7.14749 7.31747C7.27772 7.17639 7.45436 7.09713 7.63854 7.09713C9.02742 7.09713 10.7635 6.19435 11.9719 5.05083C12.119 4.91466 12.3061 4.83984 12.4996 4.83984C12.6932 4.83984 12.8803 4.91466 13.0274 5.05083C14.2427 6.20187 15.9719 7.09713 17.3608 7.09713C17.5449 7.09713 17.7216 7.17639 17.8518 7.31747C17.982 7.45856 18.0552 7.64992 18.0552 7.84944V13.1156Z" stroke="#FFF8F7" stroke-width="1.46" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_717">
                          <rect width="17.5" height="17.5" fill="white" transform="translate(3.75 3.75)"/>
                          </clipPath>
                          </defs>
                          </svg>

                          <img src="assets/icons/server.svg" alt="Setting Icon" class="h-8 w-8" />
                        </div>
                        <span class="mt-1 text-xs font-medium text-gray-700">Loremipsumdolorsit</span>
                        <span class="text-xs font-light text-gray-500">192.168.1.1</span>
                        
                        <!-- Popover 3 -->
                        <div class="popover absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-xs left-1/2 transform -translate-x-1/2">
                          <div class="relative space-y-2 !z-index-90">
                            <div class="flex items-center space-x-3 col-span-1 ">
                              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                 <svg class="absolute top-0 right-0" width="15" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="#E6372B"/>
                                  <g clip-path="url(#clip0_1_717)">
                                  <path d="M14.2358 10.4825L10.7635 14.2441M10.7635 10.4825L14.2358 14.2441M18.0552 13.1156C18.0552 16.8772 15.6246 18.758 12.7358 19.8489C12.5845 19.9044 12.4202 19.9017 12.2705 19.8413C9.37465 18.758 6.94409 16.8772 6.94409 13.1156V7.84944C6.94409 7.64992 7.01726 7.45856 7.14749 7.31747C7.27772 7.17639 7.45436 7.09713 7.63854 7.09713C9.02742 7.09713 10.7635 6.19435 11.9719 5.05083C12.119 4.91466 12.3061 4.83984 12.4996 4.83984C12.6932 4.83984 12.8803 4.91466 13.0274 5.05083C14.2427 6.20187 15.9719 7.09713 17.3608 7.09713C17.5449 7.09713 17.7216 7.17639 17.8518 7.31747C17.982 7.45856 18.0552 7.64992 18.0552 7.84944V13.1156Z" stroke="#FFF8F7" stroke-width="1.46" stroke-linecap="round" stroke-linejoin="round"/>
                                  </g>
                                  <defs>
                                  <clipPath id="clip0_1_717">
                                  <rect width="17.5" height="17.5" fill="white" transform="translate(3.75 3.75)"/>
                                  </clipPath>
                                  </defs>
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_1_817)">
                                  <path d="M5.58035 5.58035H5.58965M5.58035 16.7411H5.58965M3.72023 1.86011H18.6012C19.6285 1.86011 20.4613 2.69291 20.4613 3.72023V7.44047C20.4613 8.46778 19.6285 9.30058 18.6012 9.30058H3.72023C2.69291 9.30058 1.86011 8.46778 1.86011 7.44047V3.72023C1.86011 2.69291 2.69291 1.86011 3.72023 1.86011ZM3.72023 13.0208H18.6012C19.6285 13.0208 20.4613 13.8536 20.4613 14.8809V18.6012C20.4613 19.6285 19.6285 20.4613 18.6012 20.4613H3.72023C2.69291 20.4613 1.86011 19.6285 1.86011 18.6012V14.8809C1.86011 13.8536 2.69291 13.0208 3.72023 13.0208Z" stroke="#3994FF" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round"/>
                                  </g>
                                  <defs>
                                  <clipPath id="clip0_1_817">
                                  <rect width="22.3214" height="22.3214" fill="white"/>
                                  </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div>
                                  <p class="text-xs font-medium text-gray-700 leading-tight">Loremipsumdolorsit</p>
                                  <p class="text-xs font-light text-gray-500">192.168.1.1</p>
                              </div>
                            </div>
                          
                            <div class="flex items-center font-bold">
                              <img src="assets/icons/file.svg" alt="Setting Icon" />
                            <span>Lorem: </span>
                            <span class="px-3 py-1 text-xs bg-warning-50 text-warning-700">Lorem “ipsum" </span>
                            </div>
                            <p class="block py-1 text-xs font-bold rounded-sm ">
                              lorem <span class="px-2 bg-info-50 text-info-700">1234,5678</span>
                            </p>
                          </div>
                        </div>
                    </div>

                    <!-- 5. Final Node: Loremipsumdolorsit002 (Bottom) -->
                    <div class="node-wrapper mt-6 relative group flex flex-col items-center flex-shrink-0 w-24">
                      <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center relative">
                        <svg class="absolute top-0 right-0" width="15" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="#E6372B"/>
                        <g clip-path="url(#clip0_1_717)">
                        <path d="M14.2358 10.4825L10.7635 14.2441M10.7635 10.4825L14.2358 14.2441M18.0552 13.1156C18.0552 16.8772 15.6246 18.758 12.7358 19.8489C12.5845 19.9044 12.4202 19.9017 12.2705 19.8413C9.37465 18.758 6.94409 16.8772 6.94409 13.1156V7.84944C6.94409 7.64992 7.01726 7.45856 7.14749 7.31747C7.27772 7.17639 7.45436 7.09713 7.63854 7.09713C9.02742 7.09713 10.7635 6.19435 11.9719 5.05083C12.119 4.91466 12.3061 4.83984 12.4996 4.83984C12.6932 4.83984 12.8803 4.91466 13.0274 5.05083C14.2427 6.20187 15.9719 7.09713 17.3608 7.09713C17.5449 7.09713 17.7216 7.17639 17.8518 7.31747C17.982 7.45856 18.0552 7.64992 18.0552 7.84944V13.1156Z" stroke="#FFF8F7" stroke-width="1.46" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_717">
                        <rect width="17.5" height="17.5" fill="white" transform="translate(3.75 3.75)"/>
                        </clipPath>
                        </defs>
                        </svg>

                        <img src="assets/icons/server.svg" alt="Setting Icon" class="h-8 w-8" />
                      </div>
                      <span class="mt-1 text-xs font-medium text-gray-700">Loremipsumdolorsit002</span>
                      <span class="text-xs font-light text-gray-500">192.168.1.2</span>
                      
                      <!-- Popover 3 -->
                      <div class="popover absolute top mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-xs left-1/2 transform -translate-x-2/2">
                        <div class="relative space-y-2 !z-index-90">
                            <div class="flex items-center space-x-3 col-span-1 ">
                              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                <svg class="absolute top-0 right-0" width="15" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="#E6372B"/>
                                  <g clip-path="url(#clip0_1_717)">
                                  <path d="M14.2358 10.4825L10.7635 14.2441M10.7635 10.4825L14.2358 14.2441M18.0552 13.1156C18.0552 16.8772 15.6246 18.758 12.7358 19.8489C12.5845 19.9044 12.4202 19.9017 12.2705 19.8413C9.37465 18.758 6.94409 16.8772 6.94409 13.1156V7.84944C6.94409 7.64992 7.01726 7.45856 7.14749 7.31747C7.27772 7.17639 7.45436 7.09713 7.63854 7.09713C9.02742 7.09713 10.7635 6.19435 11.9719 5.05083C12.119 4.91466 12.3061 4.83984 12.4996 4.83984C12.6932 4.83984 12.8803 4.91466 13.0274 5.05083C14.2427 6.20187 15.9719 7.09713 17.3608 7.09713C17.5449 7.09713 17.7216 7.17639 17.8518 7.31747C17.982 7.45856 18.0552 7.64992 18.0552 7.84944V13.1156Z" stroke="#FFF8F7" stroke-width="1.46" stroke-linecap="round" stroke-linejoin="round"/>
                                  </g>
                                  <defs>
                                  <clipPath id="clip0_1_717">
                                  <rect width="17.5" height="17.5" fill="white" transform="translate(3.75 3.75)"/>
                                  </clipPath>
                                  </defs>
                                </svg>
                                <img src="assets/icons/server-sm.svg" alt="Setting Icon" />
                              </div>
                              <div>
                                  <p class="text-xs font-medium text-gray-700 leading-tight">Loremipsumdolorsit</p>
                                  <p class="text-xs font-light text-gray-500">192.168.1.1</p>
                              </div>
                            </div>
                          
                            <div class="flex items-center font-bold">
                              <img src="assets/icons/file.svg" alt="Setting Icon" />
                            <span>Lorem: </span>
                            <span class="px-3 py-1 text-xs bg-warning-50 text-warning-700">Lorem “ipsum" </span>
                            </div>
                            <p class="block py-1 text-xs font-bold rounded-sm ">
                              lorem <span class="px-2 bg-info-50 text-info-700">1234,5678</span>
                            </p>
                          </div>
                      </div>
                  </div>

                </div>

            </div>
        </div>

        <!-- Risk Tags -->
        <app-risk-tag></app-risk-tag>
    </div>
  `,
  styles: `
  :host {
    @media (max-width: 840px) {
      .flow-container {
            overflow-y: auto !important;
            overflow-x: auto !important;
            padding-bottom: 2rem;
        }
    }

        .flow-diagram {
            min-width: 600px;
            display: flex;
            align-items: center;
        }
        
        .popover {
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s, visibility 0.3s;
            z-index: 50;
        }

        .node-wrapper:hover .popover {
            visibility: visible;
            opacity: 1;
        }

        
  }`
})
export class FlowDiagramComponent {

}
