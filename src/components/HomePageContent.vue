<template>
    <section>
        <div class="overflow-hidden">
            <div class="flex align-items-start justify-content-center text-7xl pt-6 banner-text-color bg-cover bg-center h-30rem w-full image">
                AdventureBliss
            </div>
        </div>
        <div class="flex w-full justify-content-center align-items-center p-8">
            <div class="flex flex-column w-6">
                <div class="flex flex-row pb-3 gap-3">
                    <div class="flex flex-row justify-content-center box w-8 text-6xl">
                        <div class="text-center flex flex-wrap w-8 opacity-80 text p-3">
                            Testează-ți limitele
                        </div>
                    </div>
                    <div class="flex flex-row justify-content-center box w-5 text-6xl">
                        <div class="text-center flex flex-wrap w-full opacity-80 text p-3">
                            Descoperă sălbăticia
                        </div>
                    </div>
                </div>
                <img src="@\assets\images\sloganL.jpeg" alt="slogan" class="w-full">
            </div>
            <div class="flex flex-column w-5 align-items-end">
                <div class="flex pb-3 justify-content-center w-9">
                    <div class="flex justify-content-center w-12 box text-6xl">
                        <div class="text-center flex flex-wrap opacity-80 w-6 text p-3">
                            Trăiește liber
                        </div>
                    </div>
                </div>
                <img src="@\assets\images\sloganR.jpeg" alt="slogan" class="w-9">
            </div>
        </div>
    </section>
</template>

<script lang="ts">

</script>

<style>
.box {
    background-color:rgba(217, 217, 217, 0.05);
}
.text {
   color: #F9F6E7;
}

.banner-size{
    height: 778px;
}
.banner-text-color {
    color: #233E2F;
    font-weight: 800;
}
.image {
    opacity: 70%;
    background-image: url('C:\Users\Narcis\OneDrive\Desktop\AdventureBliss\frontend\src\assets\images\banner.jpeg');
}
</style>