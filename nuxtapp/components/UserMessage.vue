<template>
    <div class="user-message">
        <div class="profile-link">
            <img src="../assets/profile-pic.jpg" class="avatar offline" alt="user">
            <div class="username-wrapper">
                <div style="display: flex">
                    <div class="username">@dummy</div>
                    <div class="activity">active 5 min ago</div>
                </div>
                <div class="message-highlight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam vero, ipsam provident ducimus corporis.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserMessage"
}
</script>
