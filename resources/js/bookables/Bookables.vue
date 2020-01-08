<template>
    <div>
        <bookable-list-item 
        :item-title="bookable.title" 
        :item-content="bookable.content" 
        :price="1000">
        v-for="bookable in bookables"
        </bookable-list-item>

    </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
    components: {
        BookableListItem
    },

    data() {
        return {
            bookables: null
        };
    },

    created() {

        setTimeout(() => {
            this.bookables = [
            {
                title: "Cheap Villa !!!",
                content: "A very cheap villa"
            },
            {
                title: "Cheap Villa 2",
                content: "A very cheap villa 2"
            }
        ];
        }, 2000);
    }
};
</script>