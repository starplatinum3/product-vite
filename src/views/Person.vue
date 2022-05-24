<template>
    <div>{{`${person.name}今年${person.age}岁`}}</div>
    <button @click="changeAge">加1岁</button>
</template>

<script setup>
    import { reactive } from 'vue'
    const person = reactive({
        name: '小明',
        age: 18
    })

    // 声明methods方法
    const changeAge = () => {
        person.age += 1
    }
</script>
