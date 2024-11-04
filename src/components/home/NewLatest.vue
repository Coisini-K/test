<template>
    <div class="latest_box">
        <div class="latest_title">最新报价抢单动态</div>
        <ul class="latest_list">
            <li>(湛江)湛*******商广老板已接单：1件红薯</li>
            <li>(周口)扶**********司刘老板已接单：5瓶植物生长调节剂</li>
            <li>(宜春)华********发余老板已接单：5斤芡实</li>
            <li>(保定)安******材江老板已接单：2斤桂圆干</li>
            <li>(荆门)华*******蛋四老板已接单：4箱鸡蛋</li>
            <li>(湛江)湛*******商广老板已接单：1件红薯</li>
            <li>(昆明)干**头古老板已接单：30斤葱头</li>
        </ul>
        <div class="latest_btn">我有货，去报价抢单</div>
    </div>
</template>

<script setup></script>

<style scoped>
.latest_box {
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #fff;
}

.latest_title {
    width: 100%;
    height: 24px;
    padding-left: 10px;
    border-left: 5px solid #cff6d6;
}

.latest_list {
    flex: 1;
    margin: 20px 0;
    list-style-type: none;
}

.latest_list li {
    font-size: 0.8rem;
    padding: 10px 0;
}

.latest_btn {
    width: 100%;
    height: 40px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #38bf3e;
}
</style>
