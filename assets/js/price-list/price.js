import data from './data/data.json' assert { type: "json" };


let blockCount = data;
let catalogBody = document.getElementById('price');
class catalog {
  render() {
    let createBody = ``;

    blockCount.forEach(({ image, link }) => {

      createBody += `
              <div class="portfo_block_ overflow-hidden flex justify-center items-center hover:border-[#00ffff] border-[#ffffff33] border-[2px] rounded-[40px] h-[480px] max-[843px]:h-[420px] max-[782px]:h-[380px] max-[320px]:h-[380px] w-[400px] max-[843px]:w-[320px] max-[782px]:w-[320px] max-[375px]:w-[300px]" style="transition:0.5s;">
                <a href="${link}" class="${image.class_img} w-full h-full rounded-[40px] backdrop-blur-[5px]" aria-label="${image.name_img}" style="transition:0.3s; ${image.styleBgSize}"></a>
              </div>
              
      `;
    });
    catalogBody.innerHTML = createBody;

  }
};
let rendPage = new catalog();
rendPage.render();