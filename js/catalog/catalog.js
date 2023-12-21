import data from './data/example.json' assert { type: "json" };


let blockCount = data;
let catalogBody = document.getElementById('catalog');
class catalog {
  render() {
    let createBody = ``;

    blockCount.forEach(({ image, link }) => {

      createBody += `
            <div class="portfo_block_ hover:border-[#00ffff] border-[#ffffff33] border-[2px] rounded-[40px] h-[480px] max-[782px]:h-[450px] max-[375px]:h-[400px] max-[320px]:h-[380px] w-[400px] max-[782px]:w-[400px] max-[375px]:w-[350px] max-[320px]:w-[300px] overflow-hidden flex justify-center items-center" style="transition:0.5s;">
              <a href="${link}" class="${image.class_img} w-full h-[900px] rounded-[40px] hover:bg-[rgba(0,0,0,0.30)]" style="transition:0.3s; ${image.styleBgSize}"></a>
            </div>
            `;
    });

    catalogBody.innerHTML = createBody;

  }
};
let rendPage = new catalog();
rendPage.render();

