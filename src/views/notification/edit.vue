<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-notification">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Update Notifikasi</h1>
                    <p class="mt5 mb20 tc-green">Make notifications to your customers so they know about discount product and othe things in your shop</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt20 mb25 row">
                <div class="w20 mt20">
                    <label class="form-label">Tittle & Content</label>
                </div>
                <div class="w80 mt10">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Judul Article"
                    >
                </div>
            </div>
            <div class="mb10 row">
                <div class="w20 mt50">
                    <!-- <label class="form-label">Username</label> -->
                </div>
                <div class="w80">
                    <textarea
                        class="form-text-area"
                        type="textarea"
                        placeholder="Content (Min. 1000 Word)"
                    ></textarea>
                    
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20 mt10">
                    <label class="form-label">Broadcast Schedule</label>
                </div>
                <div class="w80">
                    <input
                        class="form-datetime-local"
                        type="datetime-local"
                        on-blur="this.type = 'text'"
                        on-focus="this.type = 'date'"
                        placeholder="Masukkan tanggal"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <!-- <label class="form-label">Roles</label> -->
                </div>
                <div class="w80">
                    <!-- <select class="form-select">
                        <option disabled selected>--- Select Role ---</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Marketing</option>
                        <option value="3">Sales</option>
                    </select> -->
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-user">
                    <button class="bt-submit-green">Update Notifikasi</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-user'
}
</script>