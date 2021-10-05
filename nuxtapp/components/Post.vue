<template>
    <div class="post">
        <div class="post-header">
            <div class="profile-link">
                <!-- <div class="avatar"></div> -->
                <img src="../assets/profile-pic.jpg" class="avatar" alt="user">
                <div style="display: flex; flex-direction: column;">
                    <div class="username">@dummy</div>
                    <div class="post-meta">
                        <div class="post-date">26/08/2021</div>
                        <div class="post-time">13:43PM</div>
                    </div>
                </div>
            </div>
            <div class="launch-post-menu">...</div>
            <!-- <div class="post-menu">...</div> -->
        </div>
        <div class="post-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos eligendi cum. Temporibus, facere alias repellat aperiam aliquid magni provident, optio corrupti illum ab reiciendis. Optio, laboriosam quas? Atque, sed?
        </div>
        <div class="post-footer">
            <div class="likes">
                <svg version="1.1" class="post-svg" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                C512,93.417,453.532,30,376,30z"/>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>

                
            </div>
            <div class="comments">
                <svg class="post-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"/>
                </svg>
            </div>
            <div class="share">
                <svg class="post-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"/>
                </svg>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post",
}
</script>
