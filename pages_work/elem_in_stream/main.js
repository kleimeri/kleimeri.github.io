let block = document.querySelector('.d')


function fullAnim() {
     function animBlocks() {
          function animBlock_1() {
               block.style.opacity = '1'
          }
          setTimeout(animBlock_1,0)

          function animBlock() {
               block.style.width = '600px'
          }
          setTimeout(animBlock,1000)
     }
     setTimeout(animBlocks,2000)

     function animBlocksClose() {
          function animBlock_1_1() {
               block.style.opacity = '0'
          }
          setTimeout(animBlock_1_1,2000)

          function animBlock_1_1_1() {
               block.style.width = '90px'
          }
          setTimeout(animBlock_1_1_1,1000)


     }

     setTimeout(animBlocksClose,10000)
}
 

setInterval(fullAnim,120000)