const slider = [  

    { 
        id: 1,
        title: ,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/08/37/1696763136605dea7d1a3847bd2440e24f06d5b154.webp',
        link: 'https://it.shein.com/shein-picks.html?hrefTarget=1',
    },

    {  
        id: 2,
        title: ,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/08/d5/16967631904dce30f457370bf73b117e7ef7ea7bda.webp',
        link: 'https://it.shein.com/other/SHEIN-X-Antonella-vestiti-sc-007214941.html?adp=20694695,12626186,22155112,21944422,22008734,22691092&src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dh1%60hz%3D0%60ps%3D3_4%60jc%3DitemPicking_007214941&src_tab_page_id=page_home1697399409436&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D10137269_CN%3DIMAGE_CAROUSEL_COMPONENT_TI%3D50001_aod%3D0_PS%3D3-4_ABT%3DSPcCccWomenHomepage_matcgroup_100115841',
    },
    { 
        id: 3,
        title: ,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/09/b8/1696822571945315f3a05fd81aad0b6e4319caa77d_thumbnail_2000x.webp',
        link: 'https://it.shein.com/Deal/Total-sc-111222310.html?src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dh1%60hz%3D0%60ps%3D3_2%60jc%3DitemPicking_111222310&src_tab_page_id=page_home1697399409436&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D10137269_CN%3DIMAGE_CAROUSEL_COMPONENT_TI%3D50001_aod%3D0_PS%3D3-2_ABT%3DSPcCccWomenHomepage_matcgroup_100115841',
    },
    { 
        id: 4,
        title: ,
        image: 'https://img.ltwebstatic.com/images3_ccc/2023/10/13/ae/169718219796828c051ca7a5eaf1cf1cac8f97e2a3.webp',
        link: 'https://it.shein.com/trends/QS-autumn-winter-sc-006180707.html?src_module=Women&src_identifier=on%3DIMAGE_CAROUSEL_COMPONENT%60cn%3Dh1%60hz%3D0%60ps%3D3_3%60jc%3DitemPicking_006180707&src_tab_page_id=page_home1697399490793&ici=CCCSN%3DWomen_ON%3DIMAGE_CAROUSEL_COMPONENT_OI%3D10137269_CN%3DIMAGE_CAROUSEL_COMPONENT_TI%3D50001_aod%3D0_PS%3D3-3_ABT%3DSPcCccWomenHomepage_matcgroup_100115841',
    },
]

export function initSlider(div) {
    div.innerHTML = `
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>