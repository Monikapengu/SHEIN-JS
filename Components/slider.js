const slider = [  

    { 
        id: 1,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/08/37/1696763136605dea7d1a3847bd2440e24f06d5b154.webp',
        link: 'https://it.shein.com/shein-picks.html?hrefTarget=1',
    },

    {  
        id: 2,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/08/d5/16967631904dce30f457370bf73b117e7ef7ea7bda.webp',
        link: 'https://it.shein.com/other/SHEIN-X-Antonella-vestiti-sc-007214941.html?adp=20694695,12626186,22155112,21944422,22008734,22691092&src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dh1%60hz%3D0%60ps%3D3_4%60jc%3DitemPicking_007214941&src_tab_page_id=page_home1697399409436&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D10137269_CN%3DIMAGE_CAROUSEL_COMPONENT_TI%3D50001_aod%3D0_PS%3D3-4_ABT%3DSPcCccWomenHomepage_matcgroup_100115841',
    },
    { 
        id: 3,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/09/b8/1696822571945315f3a05fd81aad0b6e4319caa77d_thumbnail_2000x.webp',
        link: 'https://it.shein.com/Deal/Total-sc-111222310.html?src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dh1%60hz%3D0%60ps%3D3_2%60jc%3DitemPicking_111222310&src_tab_page_id=page_home1697399409436&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D10137269_CN%3DIMAGE_CAROUSEL_COMPONENT_TI%3D50001_aod%3D0_PS%3D3-2_ABT%3DSPcCccWomenHomepage_matcgroup_100115841',
    },
    { 
        id: 4,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/13/ae/169718219796828c051ca7a5eaf1cf1cac8f97e2a3.webp',
        link: 'https://it.shein.com/trends/QS-autumn-winter-sc-006180707.html?src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dh1%60hz%3D0%60ps%3D3_3%60jc%3DitemPicking_006180707&src_tab_page_id=page_home1697399490793&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D10137269_CN%3DIMAGE_CAROUSEL_COMPONENT_TI%3D50001_aod%3D0_PS%3D3-3_ABT%3DSPcCccWomenHomepage_matcgroup_100115841',
    },
]

function composeSlide(slide) {
    return `
    <div class="carousel-item ${(slide.id == 1) ? 'active' : ''}">
            <img src="${slide.image}" class="d-block w-100" alt="Slide ${slide.id}">
       </div>
    `
}

function composeSlides(slides) {
    let html = ``
    for(let slide of slides) {
        html += composeSlide(slide)
    }
    return html

}

export function initSlider(div) {
    div.innerHTML = `
   <div id="slider" class="carousel slide">
       <div class="carousel-inner">
        ${composeSlides(slider)}
       </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#" sliderdata-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> `
;
}