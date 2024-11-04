<template>
    <div class="latest_box">
        <div class="latest_title">推荐供应商</div>
        <ul class="latest_list">
            <li>鲜果果干货水果店</li>
            <li>古田底价食用菌批发</li>
            <li>绿佳源果蔬店</li>
            <li>君泰果蔬产地供应链</li>
            <li>恒磊疏菜</li>
            <li>欣航蔬菜种苗基地</li>
            <li>希斌果蔬产地直销基地</li>
            <li>郑新文的农货店</li>
            <li>开封利航农业发展有限公司</li>
            <li>辰恩冬笋产地直发</li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped>
.latest_box {
    width: 100%;
    height: 100%;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #fff;
}

.latest_title {
    width: 100%;
    height: 24px;
    margin: 5px 0;
    padding-left: 10px;
    border-left: 7px solid #cff6d6;
}

.latest_list {
    flex: 1;
    width: 100%;
    /* margin: 20px 0; */
    /* list-style-type: none; */
}

.latest_list li {
    width: 100%;
    color: #666;
    margin-left: 15px;
    font-size: 0.7rem;
    padding: 4px;
}
</style>
