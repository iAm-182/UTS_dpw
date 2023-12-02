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
                    <h1 class="m0">Detail Notifikasi</h1>
                    <p class="mt5 mb20 tc-green">Your notifikasi details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50">
                <p>Tittle:</p>
                <h2>Produk yang Anda lihat kemarin sudah kembali tersedia</h2>
            </div>
            <div class="mt10">
                <p class="detail-title-bold">Content:</p>
                <p>Ingat produk yang anda lihat beberapa hari yang lalu? sekarang produk tersebut sudah kembali tersedia ditoko kami. Jangan lewatkan kesempatan ini</p>
            </div>
            <div class="mt10">
                <p class="detail-title-bold">Broadcast schedule</p>
                <hr class="uline-black">
                <!-- <p>vioniwitaelya@gmail.com</p> -->
            </div>
            <!-- <div>
                <p class="detail-title-bold">Roles</p>
                <label class="label-green">Super Admin</label>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-user'
}
</script>