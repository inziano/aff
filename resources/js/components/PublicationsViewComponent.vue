<template>
    <div class="w-full h-full">
        <List item-layout="vertical" class="w-2/3 mx-auto my-auto" border>
            <ListItem v-for="item in pubList" :key="item.title" class="w-2/3">
                <ListItemMeta :title="item.title" :description="item.author" />
                <p>
                    {{item.publisher}}
                </p>
               
               <p>
                   {{item.abstract}}
               </p>
                <template slot="action">
                    <li>
                        <Icon type="ios-star-outline" /> 123
                    </li>
                    <li>
                        <Icon type="ios-thumbs-up-outline" /> 234
                    </li>
                    <li>
                        <Icon type="ios-download-outline" /> 345
                    </li>
                </template>
            </ListItem>
        </List>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            pubList: []
        }
    },
    mounted() {
        axios({
            method: 'get',
            url: 'api/publication'
        }).then((response)=>{
            const arr = response.data
            this.pubList = arr.data
        }).catch((error)=>{
            this.$Notice.error({
                title: 'No publications found',
                desc: error.message
            })
        })
    }
}
</script>