<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Notification</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your notification</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-notification">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Search by invoince number, name, amount..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>TITTLE</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>ARTICLE STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_notification" :key="item.id">
                            <td class="center">{{ item.tittle }}</td>
                            <td class="center">{{ item.broadcast }}</td>
                            <td class="center">{{ item.status }}</td>
                            <td class="center">
                                <div v-if="item.articlestatus === 1">
                                    <label class="label-pink">Inactive</label>
                                </div>
                                <div v-if="item.articlestatus === 2">
                                    <label class="label-red"></label>
                                </div>
                                <div v-if="item.articlestatus === 3">
                                    <label class="label-green">Active</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-notification">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-notification">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-notification',
	components: {
		Menu
	},
    data(){
        return {
            list_notification: [
                {
                    id: "1",
                    tittle: "Diskon 50% Untuk HandPhone Samsung serie A",
                    broadcast: "07-06-2023 09:40AM",
                    articlestatus: 1
                },
                {
                    id: "2",
                    tittle: "Diskon 50% Untuk HandPhone Samsung serie A",
                    broadcast: "07-06-2023 09:40AM",
                    articlestatus: 3
                },
                {
                    id: "3",
                    tittle: "Diskon 50% Untuk HandPhone Samsung serie A",
                    broadcast: "07-06-2023 09:40AM",
                    articlestatus: 3
                },
                {
                    id: "4",
                    tittle: "Diskon 50% Untuk HandPhone Samsung serie A",
                    broadcast: "07-06-2023 09:40AM",
                    articlestatus: 3
                },
                // {
                //     id: "5",
                //     tittle: "Diskon 50% Untuk HandPhone Samsung serie A",
                //     broadcast: "07-06-2023 09:40AM",
                //     articlestatus: 3
                // }
            ]
        }
    }
}
</script>