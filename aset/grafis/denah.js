/** Sumber vektor pusat simpang. Kelompok bangunan disimpan dengan kedalaman
 * gambar, terpisah dari kendaraan, pejalan, kepala lampu dan teks yang berubah. */
const SeniKampung = {
  definisi: `
<g id="veh-T-boks">
    <g transform="translate(-440 -254)">
      <ellipse cx="442" cy="255" rx="16" ry="6.5" fill="var(--car-shadow)" opacity="1"/>
      <polygon points="432,242.4 421.7,248.1 421.7,244.6 432,238.9" fill="var(--wall-side)"/>
      <polygon points="458.3,256.9 432,242.4 432,238.9 458.3,253.4" fill="var(--car-light)"/>
      <polygon points="421.7,248.1 448,262.6 448,259.1 421.7,244.6" fill="var(--car-light)"/>
      <polygon points="448,262.6 458.3,256.9 458.3,253.4 448,259.1" fill="var(--wall-side)"/>
      <polygon points="458.3,253.4 432,238.9 421.7,244.6 448,259.1" fill="var(--sign-paper)"/>
      <circle cx="442.3" cy="259" r="2.1" fill="var(--tire)"/>
      <circle cx="442.3" cy="259" r="0.8" fill="var(--metal-lit)"/>
      <circle cx="426.7" cy="250.3" r="2.1" fill="var(--tire)"/>
      <circle cx="426.7" cy="250.3" r="0.8" fill="var(--metal-lit)"/>
      <polygon points="441.6,244.3 431.5,249.9 431.5,241.9 441.6,236.3" fill="var(--wall-side)"/>
      <polygon points="457.7,253.2 441.6,244.3 441.6,236.3 457.7,245.2" fill="var(--sign-paper)"/>
      <polygon points="431.5,249.9 447.7,258.8 447.7,250.8 431.5,241.9" fill="var(--sign-paper)"/>
      <polygon points="447.7,258.8 457.7,253.2 457.7,245.2 447.7,250.8" fill="var(--wall-side)"/>
      <polygon points="457.7,245.2 441.6,236.3 431.5,241.9 447.7,250.8" fill="var(--sign-paper)"/>
      <polygon points="441,244.1 432.5,239.3 432.5,234.8 441,239.6" fill="var(--glass)"/>
      <polygon points="432.5,239.3 422.5,244.8 422.5,240.3 432.5,234.8" fill="var(--glass)"/>
      <polygon points="431.1,249.6 441,244.1 441,239.6 431.1,245.1" fill="var(--glass)"/>
      <polygon points="422.5,244.8 431.1,249.6 431.1,245.1 422.5,240.3" fill="var(--glass)"/>
      <polygon points="441,239.6 432.5,234.8 422.5,240.3 431.1,245.1" fill="var(--sign-paper)"/>
      <polygon points="453.2,243 449.4,240.9 440,246.1 443.8,248.2" fill="var(--van-stripe)"/>
      <polygon points="432.6,239.5 431.6,239 430.1,239.8 431.1,240.3" fill="var(--lamp-yellow)"/>
      <polygon points="424.5,244 423.6,243.4 422,244.3 423,244.8" fill="var(--lamp-yellow)"/>
    </g>
  </g>
`,
  permukaan: `
<polygon points="440,43.9 582.9,123 440,202 297.1,123" fill="var(--walk)"/>
<polygon points="440,50.2 571.6,123 440,195.8 308.4,123" fill="var(--garden)"/>
<polygon points="676.9,175 819.8,254 676.9,333 534,254" fill="var(--walk)"/>
<polygon points="676.9,181.2 808.5,254 676.9,326.8 545.3,254" fill="var(--lawn)"/>
<polygon points="203.1,175 346,254 203.1,333 60.2,254" fill="var(--walk)"/>
<polygon points="203.1,181.2 334.7,254 203.1,326.8 71.5,254" fill="var(--lawn)"/>
<polygon points="440,306 582.9,385 440,464.1 297.1,385" fill="var(--walk)"/>
<polygon points="440,312.2 571.6,385 440,457.8 308.4,385" fill="var(--garden)"/>
<path d="M744.6 241.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M632.7 220.2l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M589.5 238.9l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M650.6 244.6l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M176.8 207.2l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M640.2 268l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M377 122.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M234.1 224.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M757.7 264.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M400.5 80.3l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M368.6 397.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M209.7 261.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M425 348.6l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M739.9 273.2l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M466.3 137.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M203.1 251.9l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M363.9 383.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M668.4 240l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M613 242.6l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.4 115.7l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M471 80.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M425.9 417.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M711.7 290.9l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M397.7 433.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M425 82.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M408 432.9l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M363.9 100.6l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M420.3 105.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M396.8 133.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M737 249.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M671.2 259.2l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M424 388.7l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M185.3 211.9l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M419.3 351.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M457.9 72.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M510.5 122.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M365.7 389.7l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M434.4 439.1l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M471 429.2l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M472.9 150.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M249.2 217.1l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M675.9 233.7l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M740.8 266.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M425 396.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M503 365.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M718.2 224.9l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M373.3 402.2l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M373.3 103.7l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M414.6 416.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M655.3 225.4l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M494.5 397.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M644 210.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M174.9 215.5l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M456 422l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M212.5 249.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M348.8 388.7l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M686.3 204.1l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M391.1 155.2l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M467.3 102.7l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M746.4 273.8l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M649.6 294l-1.5 -2m1.5 2l1 -3" fill="none" stroke="var(--grass-stroke)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="290.5,120.4 681.6,336.7 589.5,387.6 198.4,171.3" fill="var(--road)"/>
<polygon points="589.5,120.4 681.6,171.3 290.5,387.6 198.4,336.7" fill="var(--road)"/>
<polygon points="565,234.8 562.8,236.1 560.8,237.4 558.9,238.9 557.2,240.4 555.7,242 554.4,243.6 553.2,245.3 552.3,247 551.6,248.7 551,250.4 550.7,252.2 550.6,254 550.7,255.8 551,257.6 551.6,259.3 552.3,261 553.2,262.7 554.4,264.4 555.7,266 557.2,267.6 558.9,269.1 560.8,270.6 562.8,271.9 565,273.2 548.1,282.6 544.8,280.7 541.8,278.6 539,276.5 536.5,274.2 534.2,271.9 532.3,269.5 530.6,267 529.2,264.5 528.1,261.9 527.3,259.3 526.8,256.6 526.7,254 526.8,251.4 527.3,248.7 528.1,246.1 529.2,243.5 530.6,241 532.3,238.5 534.2,236.1 536.5,233.8 539,231.5 541.8,229.4 544.8,227.3 548.1,225.4" fill="var(--road)"/>
<polygon points="547.1,227.9 500.1,253.9 547.2,280 533.1,269.1 524.6,256.1 530.2,241.5" fill="var(--curb-edge)"/>
<polygon points="538.5,233.6 502,253.8 538.9,274.2 530.2,265.4 525.5,254.5 530.2,242.6" fill="var(--walk)"/>
<polyline points="631.8,147.9 624.2,152.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="646.8,156.2 639.3,160.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="661.8,164.6 654.3,168.7" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="617.7,155.7 610.1,159.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="632.7,164 625.2,168.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="647.7,172.4 640.2,176.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="603.6,163.5 596,167.7" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="618.6,171.8 611.1,176" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="633.6,180.2 626.1,184.3" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="589.5,171.3 581.9,175.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="604.5,179.6 597,183.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="619.5,188 612,192.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="575.4,179.1 567.8,183.3" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="590.4,187.4 582.9,191.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="605.4,195.8 597.9,199.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="561.3,186.9 553.7,191.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="576.3,195.2 568.8,199.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="591.3,203.6 583.8,207.7" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="547.2,194.7 539.6,198.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="562.2,203 554.7,207.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="577.2,211.4 569.7,215.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="502,171.8 490.8,178.1 494.8,180.3 506.1,174.1" fill="var(--mark)"/>
<polygon points="509.6,176 498.3,182.2 502.3,184.5 513.6,178.2" fill="var(--mark)"/>
<polygon points="517.1,180.2 505.8,186.4 509.8,188.6 521.1,182.4" fill="var(--mark)"/>
<polygon points="524.6,184.3 513.3,190.6 517.4,192.8 528.6,186.6" fill="var(--mark)"/>
<polygon points="532.1,188.5 520.8,194.7 524.9,197 536.2,190.7" fill="var(--mark)"/>
<polygon points="539.6,192.6 528.4,198.9 532.4,201.1 543.7,194.9" fill="var(--mark)"/>
<polygon points="547.2,196.8 535.9,203 539.9,205.3 551.2,199" fill="var(--mark)"/>
<polygon points="554.7,201 543.4,207.2 547.4,209.4 558.7,203.2" fill="var(--mark)"/>
<polygon points="562.2,205.1 550.9,211.4 555,213.6 566.2,207.4" fill="var(--mark)"/>
<polygon points="569.7,209.3 558.4,215.5 562.5,217.8 573.8,211.5" fill="var(--mark)"/>
<polygon points="577.2,213.4 566,219.7 570,221.9 581.3,215.7" fill="var(--mark)"/>
<polygon points="584.8,217.6 573.5,223.8 577.5,226.1 588.8,219.8" fill="var(--mark)"/>
<polygon points="555.6,191.1 552.8,192.6 581,208.2 583.8,206.7" fill="var(--line-bright)"/>
<polygon points="586.2,208 589,209.5 584.8,210.3" fill="var(--line-bright)"/>
<polygon points="590.9,210.6 593.7,212.1 589.5,212.9" fill="var(--line-bright)"/>
<polygon points="595.6,213.2 598.4,214.7 594.2,215.5" fill="var(--line-bright)"/>
<polyline points="597.9,176 591.3,179.6 580.1,180.7" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="581.9,177.6 580.1,180.7 585.7,179.6" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="612,183.8 605.4,187.4 598.9,191.1" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="600.7,188 598.9,191.1 604.5,190" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="626.1,191.6 619.5,195.2 617.7,201.5" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="619.5,198.4 617.7,201.5 623.3,200.4" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="474.8,323.2 472.4,321.9 469.9,320.8 467.3,319.8 464.6,318.8 461.8,318 458.8,317.3 455.8,316.6 452.7,316.1 449.6,315.7 446.4,315.4 443.2,315.2 440,315.2 436.8,315.2 433.6,315.4 430.4,315.7 427.3,316.1 424.2,316.6 421.2,317.3 418.2,318 415.4,318.8 412.7,319.8 410.1,320.8 407.6,321.9 405.2,323.2 388.3,313.8 391.8,312 395.5,310.3 399.4,308.8 403.4,307.4 407.7,306.1 412,305 416.5,304.1 421.1,303.3 425.7,302.7 430.5,302.3 435.2,302 440,302 444.8,302 449.5,302.3 454.3,302.7 458.9,303.3 463.5,304.1 468,305 472.3,306.1 476.6,307.4 480.6,308.8 484.5,310.3 488.2,312 491.7,313.8" fill="var(--road)"/>
<polygon points="487.1,313.2 440.1,287.2 393,313.3 412.7,305.5 436.2,300.8 462.6,303.9" fill="var(--curb-edge)"/>
<polygon points="476.8,308.5 440.4,288.3 403.5,308.7 419.3,303.9 439.1,301.3 460.7,303.9" fill="var(--walk)"/>
<polyline points="631.8,360.1 624.2,355.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="616.7,368.4 609.2,364.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="601.7,376.7 594.2,372.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="617.7,352.3 610.1,348.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="602.6,360.6 595.1,356.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="587.6,368.9 580.1,364.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="603.6,344.5 596,340.3" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="588.5,352.8 581,348.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="573.5,361.1 566,357" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="589.5,336.7 581.9,332.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="574.4,345 566.9,340.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="559.4,353.3 551.9,349.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="575.4,328.9 567.8,324.7" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="560.3,337.2 552.8,333" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="545.3,345.5 537.8,341.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="561.3,321.1 553.7,316.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="546.2,329.4 538.7,325.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="531.2,337.7 523.7,333.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="547.2,313.3 539.6,309.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="532.1,321.6 524.6,317.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="517.1,329.9 509.6,325.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="588.5,288.3 577.2,282.1 573.2,284.3 584.5,290.6" fill="var(--mark)"/>
<polygon points="581,292.5 569.7,286.2 565.7,288.5 577,294.7" fill="var(--mark)"/>
<polygon points="573.5,296.6 562.2,290.4 558.2,292.6 569.4,298.9" fill="var(--mark)"/>
<polygon points="566,300.8 554.7,294.6 550.6,296.8 561.9,303" fill="var(--mark)"/>
<polygon points="558.4,305 547.2,298.7 543.1,301 554.4,307.2" fill="var(--mark)"/>
<polygon points="550.9,309.1 539.6,302.9 535.6,305.1 546.9,311.4" fill="var(--mark)"/>
<polygon points="543.4,313.3 532.1,307 528.1,309.3 539.4,315.5" fill="var(--mark)"/>
<polygon points="535.9,317.4 524.6,311.2 520.6,313.4 531.8,319.7" fill="var(--mark)"/>
<polygon points="528.4,321.6 517.1,315.4 513,317.6 524.3,323.8" fill="var(--mark)"/>
<polygon points="520.8,325.8 509.6,319.5 505.5,321.8 516.8,328" fill="var(--mark)"/>
<polygon points="513.3,329.9 502,323.7 498,325.9 509.3,332.2" fill="var(--mark)"/>
<polygon points="505.8,334.1 494.5,327.8 490.5,330.1 501.8,336.3" fill="var(--mark)"/>
<polygon points="553.7,318 550.9,316.4 522.7,332 525.5,333.6" fill="var(--line-bright)"/>
<polygon points="523.2,334.9 520.4,336.4 519,334.1" fill="var(--line-bright)"/>
<polygon points="518.5,337.5 515.7,339 514.3,336.7" fill="var(--line-bright)"/>
<polygon points="513.8,340.1 511,341.6 509.6,339.3" fill="var(--line-bright)"/>
<polyline points="581,341.4 574.4,337.7 572.5,331.5" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="578.2,332.5 572.5,331.5 574.4,334.6" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="566.9,349.2 560.3,345.5 553.7,341.9" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="559.4,342.9 553.7,341.9 555.6,345" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="552.8,357 546.2,353.3 534.9,352.3" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="540.6,353.3 534.9,352.3 536.8,355.4" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="315,273.2 317.2,271.9 319.2,270.6 321.1,269.1 322.8,267.6 324.3,266 325.6,264.4 326.8,262.7 327.7,261 328.4,259.3 329,257.6 329.3,255.8 329.4,254 329.3,252.2 329,250.4 328.4,248.7 327.7,247 326.8,245.3 325.6,243.6 324.3,242 322.8,240.4 321.1,238.9 319.2,237.4 317.2,236.1 315,234.8 331.9,225.4 335.2,227.3 338.2,229.4 341,231.5 343.5,233.8 345.8,236.1 347.7,238.5 349.4,241 350.8,243.5 351.9,246.1 352.7,248.7 353.2,251.4 353.3,254 353.2,256.6 352.7,259.3 351.9,261.9 350.8,264.5 349.4,267 347.7,269.5 345.8,271.9 343.5,274.2 341,276.5 338.2,278.6 335.2,280.7 331.9,282.6" fill="var(--road)"/>
<polygon points="332.9,280.1 379.9,254.1 332.8,228 346.9,238.9 355.4,251.9 349.8,266.5" fill="var(--curb-edge)"/>
<polygon points="341.5,274.4 378,254.2 341.1,233.8 349.8,242.6 354.5,253.5 349.8,265.4" fill="var(--walk)"/>
<polyline points="248.2,360.1 255.8,355.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="233.2,351.8 240.7,347.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="218.2,343.4 225.7,339.3" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="262.3,352.3 269.9,348.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="247.3,344 254.8,339.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="232.3,335.6 239.8,331.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="276.4,344.5 284,340.3" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="261.4,336.2 268.9,332" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="246.4,327.8 253.9,323.7" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="290.5,336.7 298.1,332.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="275.5,328.4 283,324.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="260.5,320 268,315.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="304.6,328.9 312.2,324.7" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="289.6,320.6 297.1,316.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="274.6,312.2 282.1,308.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="318.7,321.1 326.3,316.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="303.7,312.8 311.2,308.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="288.7,304.4 296.2,300.3" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="332.8,313.3 340.4,309.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="317.8,305 325.3,300.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="302.8,296.6 310.3,292.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="378,336.2 389.2,329.9 385.2,327.7 373.9,333.9" fill="var(--mark)"/>
<polygon points="370.4,332 381.7,325.8 377.7,323.5 366.4,329.8" fill="var(--mark)"/>
<polygon points="362.9,327.8 374.2,321.6 370.2,319.4 358.9,325.6" fill="var(--mark)"/>
<polygon points="355.4,323.7 366.7,317.4 362.6,315.2 351.4,321.4" fill="var(--mark)"/>
<polygon points="347.9,319.5 359.2,313.3 355.1,311 343.8,317.3" fill="var(--mark)"/>
<polygon points="340.4,315.4 351.6,309.1 347.6,306.9 336.3,313.1" fill="var(--mark)"/>
<polygon points="332.8,311.2 344.1,305 340.1,302.7 328.8,309" fill="var(--mark)"/>
<polygon points="325.3,307 336.6,300.8 332.6,298.6 321.3,304.8" fill="var(--mark)"/>
<polygon points="317.8,302.9 329.1,296.6 325,294.4 313.8,300.6" fill="var(--mark)"/>
<polygon points="310.3,298.7 321.6,292.5 317.5,290.2 306.2,296.5" fill="var(--mark)"/>
<polygon points="302.8,294.6 314,288.3 310,286.1 298.7,292.3" fill="var(--mark)"/>
<polygon points="295.2,290.4 306.5,284.2 302.5,281.9 291.2,288.2" fill="var(--mark)"/>
<polygon points="324.4,316.9 327.2,315.4 299,299.8 296.2,301.3" fill="var(--line-bright)"/>
<polygon points="293.8,300 291,298.5 295.2,297.7" fill="var(--line-bright)"/>
<polygon points="289.1,297.4 286.3,295.9 290.5,295.1" fill="var(--line-bright)"/>
<polygon points="284.4,294.8 281.6,293.3 285.8,292.5" fill="var(--line-bright)"/>
<polyline points="282.1,332 288.7,328.4 299.9,327.3" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="298.1,330.4 299.9,327.3 294.3,328.4" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="268,324.2 274.6,320.6 281.1,316.9" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="279.3,320 281.1,316.9 275.5,318" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="253.9,316.4 260.5,312.8 262.3,306.5" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="260.5,309.6 262.3,306.5 256.7,307.6" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="405.2,184.8 407.6,186.1 410.1,187.2 412.7,188.2 415.4,189.2 418.2,190 421.2,190.7 424.2,191.4 427.3,191.9 430.4,192.3 433.6,192.6 436.8,192.8 440,192.8 443.2,192.8 446.4,192.6 449.6,192.3 452.7,191.9 455.8,191.4 458.8,190.7 461.8,190 464.6,189.2 467.3,188.2 469.9,187.2 472.4,186.1 474.8,184.8 491.7,194.2 488.2,196 484.5,197.7 480.6,199.2 476.6,200.6 472.3,201.9 468,203 463.5,203.9 458.9,204.7 454.3,205.3 449.5,205.7 444.8,206 440,206 435.2,206 430.5,205.7 425.7,205.3 421.1,204.7 416.5,203.9 412,203 407.7,201.9 403.4,200.6 399.4,199.2 395.5,197.7 391.8,196 388.3,194.2" fill="var(--road)"/>
<polygon points="392.9,194.8 439.9,220.8 487,194.7 467.3,202.5 443.8,207.2 417.4,204.1" fill="var(--curb-edge)"/>
<polygon points="403.2,199.5 439.6,219.7 476.5,199.3 460.7,204.1 440.9,206.7 419.3,204.1" fill="var(--walk)"/>
<polyline points="248.2,147.9 255.8,152.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="263.3,139.6 270.8,143.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="278.3,131.3 285.8,135.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="262.3,155.7 269.9,159.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="277.4,147.4 284.9,151.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="292.4,139.1 299.9,143.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="276.4,163.5 284,167.7" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="291.5,155.2 299,159.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="306.5,146.9 314,151" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="290.5,171.3 298.1,175.5" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="305.6,163 313.1,167.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="320.6,154.7 328.1,158.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="304.6,179.1 312.2,183.3" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="319.7,170.8 327.2,175" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="334.7,162.5 342.2,166.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="318.7,186.9 326.3,191.1" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="333.8,178.6 341.3,182.8" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="348.8,170.3 356.3,174.4" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="332.8,194.7 340.4,198.9" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="347.9,186.4 355.4,190.6" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="362.9,178.1 370.4,182.2" fill="none" stroke="var(--mark)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="291.5,219.7 302.8,225.9 306.8,223.7 295.5,217.4" fill="var(--mark)"/>
<polygon points="299,215.5 310.3,221.8 314.3,219.5 303,213.3" fill="var(--mark)"/>
<polygon points="306.5,211.4 317.8,217.6 321.8,215.4 310.6,209.1" fill="var(--mark)"/>
<polygon points="314,207.2 325.3,213.4 329.4,211.2 318.1,205" fill="var(--mark)"/>
<polygon points="321.6,203 332.8,209.3 336.9,207 325.6,200.8" fill="var(--mark)"/>
<polygon points="329.1,198.9 340.4,205.1 344.4,202.9 333.1,196.6" fill="var(--mark)"/>
<polygon points="336.6,194.7 347.9,201 351.9,198.7 340.6,192.5" fill="var(--mark)"/>
<polygon points="344.1,190.6 355.4,196.8 359.4,194.6 348.2,188.3" fill="var(--mark)"/>
<polygon points="351.6,186.4 362.9,192.6 367,190.4 355.7,184.2" fill="var(--mark)"/>
<polygon points="359.2,182.2 370.4,188.5 374.5,186.2 363.2,180" fill="var(--mark)"/>
<polygon points="366.7,178.1 378,184.3 382,182.1 370.7,175.8" fill="var(--mark)"/>
<polygon points="374.2,173.9 385.5,180.2 389.5,177.9 378.2,171.7" fill="var(--mark)"/>
<polygon points="326.3,190 329.1,191.6 357.3,176 354.5,174.4" fill="var(--line-bright)"/>
<polygon points="356.8,173.1 359.6,171.6 361,173.9" fill="var(--line-bright)"/>
<polygon points="361.5,170.5 364.3,169 365.7,171.3" fill="var(--line-bright)"/>
<polygon points="366.2,167.9 369,166.4 370.4,168.7" fill="var(--line-bright)"/>
<polyline points="299,166.6 305.6,170.3 307.5,176.5" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="301.8,175.5 307.5,176.5 305.6,173.4" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="313.1,158.8 319.7,162.5 326.3,166.1" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="320.6,165.1 326.3,166.1 324.4,163" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="327.2,151 333.8,154.7 345.1,155.7" fill="none" stroke="var(--mark)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="339.4,154.7 345.1,155.7 343.2,152.6" fill="none" stroke="var(--mark)" stroke-width="1.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="384.5,82.9 499.2,146.4 431.5,183.8 316.9,120.4" fill="var(--paving)"/>
<polyline points="392.1,87.1 324.4,124.5" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="401.5,92.3 333.8,129.7" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="410.9,97.5 343.2,134.9" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="420.3,102.7 352.6,140.1" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="429.7,107.9 362,145.3" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="439.1,113.1 371.4,150.5" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="448.5,118.3 380.8,155.7" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="457.9,123.5 390.2,160.9" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="467.3,128.7 399.6,166.1" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="476.7,133.9 409,171.3" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="486.1,139.1 418.4,176.5" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="495.5,144.3 427.8,181.7" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="693.8,199.9 786.9,251.4 675.9,312.8 582.9,261.3" fill="var(--paving)"/>
<polyline points="701.3,204.1 590.4,265.4" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="710.7,209.3 599.8,270.6" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="720.1,214.5 609.2,275.8" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="729.5,219.7 618.6,281" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="738.9,224.9 628,286.2" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="748.3,230.1 637.4,291.4" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="757.7,235.3 646.8,296.6" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="767.1,240.5 656.2,301.8" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="776.5,245.7 665.6,307" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="785.9,250.9 675,312.2" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="191.8,196.8 305.6,259.7 211.6,311.7 97.8,248.8" fill="var(--paving)"/>
<polyline points="199.4,201 105.4,253" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="208.8,206.2 114.8,258.2" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="218.2,211.4 124.2,263.4" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="227.6,216.6 133.6,268.6" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="237,221.8 143,273.8" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="246.4,227 152.4,279" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="255.8,232.2 161.8,284.2" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="265.2,237.4 171.2,289.4" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="274.6,242.6 180.6,294.6" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="284,247.8 190,299.8" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="293.4,253 199.4,305" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="302.8,258.2 208.8,310.2" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="437.2,323.2 554.7,388.2 434.4,454.7 316.9,389.7" fill="var(--paving)"/>
<polyline points="444.7,327.3 324.4,393.9" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="454.1,332.5 333.8,399.1" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="463.5,337.7 343.2,404.3" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="472.9,342.9 352.6,409.5" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="482.3,348.1 362,414.7" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="491.7,353.3 371.4,419.9" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="501.1,358.5 380.8,425.1" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="510.5,363.7 390.2,430.3" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="519.9,368.9 399.6,435.5" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="529.3,374.1 409,440.7" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="538.7,379.3 418.4,445.9" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="548.1,384.5 427.8,451.1" fill="none" stroke="var(--pave-line)" stroke-width="0.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="391.1,362.2 485.1,414.2 429.7,444.8 335.7,392.8" fill="var(--school-court)"/>
<polyline points="391.1,367.4 475.7,414.2 428.7,440.2 344.1,393.4 391.1,367.4" fill="none" stroke="var(--line-bright)" stroke-width="1.5" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="389.2,374.6 393,376.7" fill="none" stroke="var(--line-bright)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="382.7,378.3 386.4,380.4" fill="none" stroke="var(--line-bright)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="376.1,381.9 379.8,384" fill="none" stroke="var(--line-bright)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="369.5,385.6 373.3,387.6" fill="none" stroke="var(--line-bright)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="362.9,389.2 366.7,391.3" fill="none" stroke="var(--line-bright)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
  objek: [
    [
      -336,
      `
<ellipse cx="415.8" cy="80.3" rx="13" ry="5" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(411.8 79.3) scale(1)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
    [
      -275.5,
      `
<polyline points="366.7,88.8 305.6,122.6" fill="none" stroke="var(--timber)" stroke-width="1.8" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="366.7,84.8 305.6,118.6" fill="none" stroke="var(--timber)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="366.7,93.8 366.7,82.8" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="359.9,97.6 359.9,86.6" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="353.1,101.4 353.1,90.4" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="346.3,105.1 346.3,94.1" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="339.5,108.9 339.5,97.9" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="332.7,112.6 332.7,101.6" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="325.9,116.4 325.9,105.4" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="319.2,120.1 319.2,109.1" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="312.4,123.9 312.4,112.9" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="305.6,127.6 305.6,116.6" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      -259.0,
      `
<polygon points="460.7,85.5 550.9,135.4 502,162.5 411.8,112.6" fill="var(--plot-shadow)"/>
<polygon points="547.2,130.2 499.2,156.8 499.2,127.8 547.2,101.2" fill="var(--wall-side)"/>
<polygon points="411.8,108.4 499.2,156.8 499.2,127.8 411.8,79.4" fill="var(--wall)"/>
<polygon points="459.7,52.9 547.2,101.2 499.2,127.8 411.8,79.4" fill="var(--plaster)"/>
<polygon points="414.5,108 439,121.6 439,106.6 414.5,93" fill="var(--frame)"/>
<polygon points="415.6,107.5 438,119.9 438,107.1 415.6,94.7" fill="var(--glass)"/>
<polygon points="426.3,114.5 427.7,115.3 427.7,100.3 426.3,99.5" fill="var(--frame)"/>
<polygon points="441.6,123 466.1,136.5 466.1,121.5 441.6,108" fill="var(--frame)"/>
<polygon points="442.7,122.5 465.1,134.9 465.1,122.1 442.7,109.7" fill="var(--glass)"/>
<polygon points="453.4,129.5 454.8,130.3 454.8,115.3 453.4,114.5" fill="var(--frame)"/>
<polygon points="468.7,138 493.2,151.5 493.2,136.5 468.7,123" fill="var(--frame)"/>
<polygon points="469.8,137.5 492.2,149.9 492.2,137.1 469.8,124.7" fill="var(--glass)"/>
<polygon points="480.5,144.5 481.9,145.3 481.9,130.3 480.5,129.5" fill="var(--frame)"/>
<polygon points="544.4,124.9 520.5,138.1 520.5,129.1 544.4,115.9" fill="var(--frame)"/>
<polygon points="543.4,124.3 521.5,136.4 521.5,129.6 543.4,117.5" fill="var(--glass)"/>
<polygon points="532.9,131.2 531.5,132 531.5,123 532.9,122.2" fill="var(--frame)"/>
<polygon points="550.9,101.2 499.2,129.8 499.2,126.8 550.9,98.2" fill="var(--metal-line)"/>
<polygon points="408,79.4 499.2,129.8 499.2,126.8 408,76.4" fill="var(--metal-lit)"/>
<polygon points="459.7,47.8 550.9,98.2 499.2,126.8 408,76.4" fill="var(--roof-light)"/>
<polygon points="459.7,50.7 545.3,98 499.2,123.5 413.7,76.2" fill="var(--flat-roof)"/>
<polyline points="456,53.7 539.6,100" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="451.3,56.3 534.9,102.6" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="446.6,58.9 530.2,105.2" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="441.9,61.5 525.5,107.8" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="437.2,64.1 520.8,110.4" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="432.5,66.7 516.1,113" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="427.8,69.3 511.4,115.6" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="423.1,71.9 506.7,118.2" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="418.4,74.5 502,120.8" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<g transform="matrix(.94 .52 0 1 409 77.9)">
    <rect width="97" height="15" rx="1.3" fill="var(--sign-paper)"/>
    <rect width="97" height="2.7" fill="var(--sign-red)"/>
    <text x="48.5" y="11.5" text-anchor="middle" font-family="DM Sans,Arial,sans-serif" font-weight="600" font-size="8.5" fill="var(--sign-ink)">KOPDES MERAH PUTIH</text>
  </g>
`,
    ],
    [
      -246,
      `
<ellipse cx="553" cy="127.1" rx="11.8" ry="4.5" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(549 126.1) scale(0.9)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0 0q7 -18 2 -34" fill="none" stroke="var(--trunk)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 -33q-7.9799999999999995 -5 -19 2q6.08 -3 19 -2Z" fill="var(--leaf)"/>
    <path d="M2 -33q-5.46 -13 -13 -6q4.16 5 13 6Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q-1.68 -19 -4 -12q1.28 11 4 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q3.78 -19 9 -12q-2.88 11 -9 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.9799999999999995 -12 19 -5q-6.08 4 -19 5Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.14 -3 17 4q-5.44 -5 -17 -4Z" fill="var(--leaf)"/>
    <path d="M2 -33q3.36 1 8 8q-2.56 -9 -8 -8Z" fill="var(--leaf)"/>
    <path d="M2 -33q-4.2 2 -10 9q3.2 -10 10 -9Z" fill="var(--leaf)"/>
  </g>
`,
    ],
    [
      -242,
      `
<polyline points="566,128.2 566,81.2" fill="none" stroke="var(--pole)" stroke-width="2.5" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="559,83.2 574,83.2" fill="none" stroke="var(--pole)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="560,83.2 560,80.2" fill="none" stroke="var(--metal)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="572,83.2 572,81.4" fill="none" stroke="var(--metal)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      -239,
      `
<polyline points="316.9,129.7 316.9,82.7" fill="none" stroke="var(--pole)" stroke-width="2.5" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="309.9,84.7 324.9,84.7" fill="none" stroke="var(--pole)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="310.9,84.7 310.9,81.7" fill="none" stroke="var(--metal)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="322.9,84.7 322.9,82.9" fill="none" stroke="var(--metal)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      -234.0,
      `
<polygon points="358.2,116.2 398.6,138.6 363.9,157.8 323.4,135.4" fill="var(--plot-shadow)"/>
<polygon points="394.9,133.4 361,152.1 361,125.1 394.9,106.4" fill="var(--wall-side)"/>
<polygon points="323.4,131.3 361,152.1 361,125.1 323.4,104.3" fill="var(--wall)"/>
<polygon points="357.3,85.6 394.9,106.4 361,125.1 323.4,104.3" fill="var(--plaster)"/>
<polygon points="327.1,128.4 336.5,133.6 336.5,122.6 327.1,117.4" fill="var(--frame)"/>
<polygon points="328.1,127.9 335.5,131.9 335.5,123.1 328.1,119.1" fill="var(--glass)"/>
<polygon points="331.6,130.9 332.2,131.2 332.2,120.2 331.6,119.9" fill="var(--frame)"/>
<polygon points="391.2,130.5 380.4,136.5 380.4,126.5 391.2,120.5" fill="var(--frame)"/>
<polygon points="390.2,130 381.4,134.8 381.4,127 390.2,122.2" fill="var(--glass)"/>
<polygon points="386,133.4 385.4,133.7 385.4,123.7 386,123.4" fill="var(--frame)"/>
<polygon points="342,141.8 351.7,147.2 351.7,132.2 342,126.8" fill="var(--door)"/>
<polygon points="357.3,83.5 398.6,106.4 379.8,107.8 338.5,84.9" fill="var(--roof-lit)"/>
<polygon points="338.5,84.9 379.8,107.8 361,127.2 319.7,104.3" fill="var(--roof)"/>
<polygon points="398.6,106.4 361,127.2 379.8,107.8" fill="var(--wall-warm)"/>
<polyline points="334.7,88.8 376.1,111.6" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="331,92.6 372.3,115.5" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="327.2,96.5 368.6,119.4" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="323.4,100.4 364.8,123.3" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="341.3,86.4 322.5,105.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="346,89 327.2,108.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="350.7,91.6 331.9,111" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="355.4,94.2 336.6,113.6" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="360.1,96.8 341.3,116.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="364.8,99.4 346,118.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="369.5,102 350.7,121.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="374.2,104.6 355.4,124" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="378.9,107.2 360.1,126.6" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="338.5,84.9 379.8,107.8" fill="none" stroke="var(--ridge)" stroke-width="2.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="319.7,104.3 361,127.2" fill="none" stroke="var(--roof-line)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      -217.5,
      `
<polyline points="310.3,120 367.6,151.8" fill="none" stroke="var(--timber)" stroke-width="1.8" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="310.3,116 367.6,147.8" fill="none" stroke="var(--timber)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="310.3,125 310.3,114" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="316.7,128.6 316.7,117.6" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="323,132.1 323,121.1" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="329.4,135.6 329.4,124.6" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="335.8,139.1 335.8,128.1" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="342.1,142.7 342.1,131.7" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="348.5,146.2 348.5,135.2" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="354.9,149.7 354.9,138.7" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="361.2,153.2 361.2,142.2" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="367.6,156.8 367.6,145.8" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      -174,
      `
<ellipse cx="395.1" cy="164.5" rx="10" ry="3.9" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(391.1 163.5) scale(0.8)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
    [
      -169,
      `
<ellipse cx="503.2" cy="167.1" rx="10.7" ry="4.1" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(499.2 166.1) scale(0.8)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-16 -20q3 -7 16 -8q14 0 17 8q-5 5 -17 3q-10 3 -16 -3Z" fill="var(--leaf)"/>
    <path d="M-13 -28q3 -7 13 -8q11 0 14 8q-5 5 -14 3q-10 3 -13 -3Z" fill="var(--leaf)"/>
    <path d="M-8 -35q3 -7 8 -8q6 0 9 8q-5 5 -9 3q-10 3 -8 -3Z" fill="var(--leaf-lit)"/>
  </g>
`,
    ],
    [
      -137,
      `
<ellipse cx="211.8" cy="183.8" rx="13" ry="5" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(207.8 182.8) scale(1)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
    [
      -110,
      `
<polyline points="440,196.8 440,149.8" fill="none" stroke="var(--pole)" stroke-width="2.5" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="433,151.8 448,151.8" fill="none" stroke="var(--pole)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="434,151.8 434,148.8" fill="none" stroke="var(--metal)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="446,151.8 446,150" fill="none" stroke="var(--metal)" stroke-width="2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      -103,
      `
<ellipse cx="651.7" cy="201.4" rx="11.2" ry="4.3" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(647.7 200.4) scale(0.9)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0 0q7 -18 2 -34" fill="none" stroke="var(--trunk)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 -33q-7.9799999999999995 -5 -19 2q6.08 -3 19 -2Z" fill="var(--leaf)"/>
    <path d="M2 -33q-5.46 -13 -13 -6q4.16 5 13 6Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q-1.68 -19 -4 -12q1.28 11 4 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q3.78 -19 9 -12q-2.88 11 -9 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.9799999999999995 -12 19 -5q-6.08 4 -19 5Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.14 -3 17 4q-5.44 -5 -17 -4Z" fill="var(--leaf)"/>
    <path d="M2 -33q3.36 1 8 8q-2.56 -9 -8 -8Z" fill="var(--leaf)"/>
    <path d="M2 -33q-4.2 2 -10 9q3.2 -10 10 -9Z" fill="var(--leaf)"/>
  </g>
`,
    ],
    [
      -50,
      `
<g id="gedung-warga">
    <polygon points="184.3,210.3 248.2,245.7 212.5,265.4 148.6,230.1" fill="var(--plot-shadow)"/>
    <polygon points="248.2,240.5 209.7,261.8 209.7,258.8 248.2,237.5" fill="var(--wall-side)"/>
    <polygon points="144.8,225.9 209.7,261.8 209.7,258.8 144.8,222.9" fill="var(--paving)"/>
    <polygon points="183.4,201.6 248.2,237.5 209.7,258.8 144.8,222.9" fill="var(--plaster)"/>
    <g data-lantai="1">
      <polygon points="244.5,237.5 209.7,256.7 209.7,239.7 244.5,220.5" fill="var(--gedung-side)"/>
      <polygon points="148.6,222.9 209.7,256.7 209.7,239.7 148.6,205.9" fill="var(--gedung-front)"/>
      <polygon points="183.4,186.7 244.5,220.5 209.7,239.7 148.6,205.9" fill="var(--flat-roof)"/>
      <polygon points="152.2,221.1 161.8,226.4 161.8,217.4 152.2,212.1" fill="var(--frame)"/>
      <polygon points="153.3,220.5 160.8,224.7 160.8,217.9 153.3,213.7" fill="var(--glass)"/>
      <polygon points="156.8,223.6 157.4,223.9 157.4,214.9 156.8,214.6" fill="var(--frame)"/>
      <polygon points="166.3,228.9 175.9,234.2 175.9,225.2 166.3,219.9" fill="var(--frame)"/>
      <polygon points="167.4,228.3 174.9,232.5 174.9,225.7 167.4,221.5" fill="var(--glass)"/>
      <polygon points="170.9,231.4 171.5,231.7 171.5,222.7 170.9,222.4" fill="var(--frame)"/>
      <polygon points="180.4,236.7 190,242 190,233 180.4,227.7" fill="var(--frame)"/>
      <polygon points="181.5,236.1 189,240.3 189,233.5 181.5,229.3" fill="var(--glass)"/>
      <polygon points="185,239.2 185.6,239.5 185.6,230.5 185,230.2" fill="var(--frame)"/>
      <polygon points="194.5,244.5 204.1,249.8 204.1,240.8 194.5,235.5" fill="var(--frame)"/>
      <polygon points="195.6,243.9 203.1,248.1 203.1,241.3 195.6,237.1" fill="var(--glass)"/>
      <polygon points="199.1,247 199.7,247.3 199.7,238.3 199.1,238" fill="var(--frame)"/>
      <polygon points="241.8,235.1 235,238.8 235,229.8 241.8,226.1" fill="var(--frame)"/>
      <polygon points="240.7,234.6 236,237.2 236,230.4 240.7,227.8" fill="var(--glass)"/>
      <polygon points="238.5,236.9 238.1,237.1 238.1,228.1 238.5,227.9" fill="var(--frame)"/>
      <polygon points="231.4,240.8 224.7,244.6 224.7,235.6 231.4,231.8" fill="var(--frame)"/>
      <polygon points="230.4,240.3 225.7,242.9 225.7,236.1 230.4,233.5" fill="var(--glass)"/>
      <polygon points="228.2,242.6 227.8,242.8 227.8,233.8 228.2,233.6" fill="var(--frame)"/>
      <polygon points="221.1,246.5 214.3,250.3 214.3,241.3 221.1,237.5" fill="var(--frame)"/>
      <polygon points="220.1,246 215.4,248.6 215.4,241.8 220.1,239.2" fill="var(--glass)"/>
      <polygon points="217.8,248.3 217.4,248.6 217.4,239.6 217.8,239.3" fill="var(--frame)"/>
      <polygon points="247.8,222.7 209.2,244.1 209.2,241.5 247.8,220.1" fill="var(--gedung-band)"/>
      <polygon points="144.4,208.2 209.2,244.1 209.2,241.5 144.4,205.6" fill="var(--metal-lit)"/>
      <polygon points="182.9,184.3 247.8,220.1 209.2,241.5 144.4,205.6" fill="var(--roof-light)"/>
    </g>
    <g data-lantai="2">
      <polygon points="244.5,220.5 209.7,239.7 209.7,222.7 244.5,203.5" fill="var(--gedung-side)"/>
      <polygon points="148.6,205.9 209.7,239.7 209.7,222.7 148.6,188.9" fill="var(--gedung-front)"/>
      <polygon points="183.4,169.7 244.5,203.5 209.7,222.7 148.6,188.9" fill="var(--flat-roof)"/>
      <polygon points="152.2,204.1 161.8,209.4 161.8,200.4 152.2,195.1" fill="var(--frame)"/>
      <polygon points="153.3,203.5 160.8,207.7 160.8,200.9 153.3,196.7" fill="var(--glass)"/>
      <polygon points="156.8,206.6 157.4,206.9 157.4,197.9 156.8,197.6" fill="var(--frame)"/>
      <polygon points="166.3,211.9 175.9,217.2 175.9,208.2 166.3,202.9" fill="var(--frame)"/>
      <polygon points="167.4,211.3 174.9,215.5 174.9,208.7 167.4,204.5" fill="var(--glass)"/>
      <polygon points="170.9,214.4 171.5,214.7 171.5,205.7 170.9,205.4" fill="var(--frame)"/>
      <polygon points="180.4,219.7 190,225 190,216 180.4,210.7" fill="var(--frame)"/>
      <polygon points="181.5,219.1 189,223.3 189,216.5 181.5,212.3" fill="var(--glass)"/>
      <polygon points="185,222.2 185.6,222.5 185.6,213.5 185,213.2" fill="var(--frame)"/>
      <polygon points="194.5,227.5 204.1,232.8 204.1,223.8 194.5,218.5" fill="var(--frame)"/>
      <polygon points="195.6,226.9 203.1,231.1 203.1,224.3 195.6,220.1" fill="var(--glass)"/>
      <polygon points="199.1,230 199.7,230.3 199.7,221.3 199.1,221" fill="var(--frame)"/>
      <polygon points="241.8,218.1 235,221.8 235,212.8 241.8,209.1" fill="var(--frame)"/>
      <polygon points="240.7,217.6 236,220.2 236,213.4 240.7,210.8" fill="var(--glass)"/>
      <polygon points="238.5,219.9 238.1,220.1 238.1,211.1 238.5,210.9" fill="var(--frame)"/>
      <polygon points="231.4,223.8 224.7,227.6 224.7,218.6 231.4,214.8" fill="var(--frame)"/>
      <polygon points="230.4,223.3 225.7,225.9 225.7,219.1 230.4,216.5" fill="var(--glass)"/>
      <polygon points="228.2,225.6 227.8,225.8 227.8,216.8 228.2,216.6" fill="var(--frame)"/>
      <polygon points="221.1,229.5 214.3,233.3 214.3,224.3 221.1,220.5" fill="var(--frame)"/>
      <polygon points="220.1,229 215.4,231.6 215.4,224.8 220.1,222.2" fill="var(--glass)"/>
      <polygon points="217.8,231.3 217.4,231.6 217.4,222.6 217.8,222.3" fill="var(--frame)"/>
      <polygon points="247.8,205.7 209.2,227.1 209.2,224.5 247.8,203.1" fill="var(--gedung-band)"/>
      <polygon points="144.4,191.2 209.2,227.1 209.2,224.5 144.4,188.6" fill="var(--metal-lit)"/>
      <polygon points="182.9,167.3 247.8,203.1 209.2,224.5 144.4,188.6" fill="var(--roof-light)"/>
      <polyline points="148.6,206.5 204.1,237.2" fill="none" stroke="var(--metal-line)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="148.6,209 148.6,205.8" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="161.8,216.3 161.8,213.1" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="174.9,223.6 174.9,220.4" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="188.1,230.9 188.1,227.7" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="201.2,238.2 201.2,235" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g data-lantai="3">
      <polygon points="244.5,203.5 209.7,222.7 209.7,205.7 244.5,186.5" fill="var(--gedung-side)"/>
      <polygon points="148.6,188.9 209.7,222.7 209.7,205.7 148.6,171.9" fill="var(--gedung-front)"/>
      <polygon points="183.4,152.7 244.5,186.5 209.7,205.7 148.6,171.9" fill="var(--flat-roof)"/>
      <polygon points="152.2,187.1 161.8,192.4 161.8,183.4 152.2,178.1" fill="var(--frame)"/>
      <polygon points="153.3,186.5 160.8,190.7 160.8,183.9 153.3,179.7" fill="var(--glass)"/>
      <polygon points="156.8,189.6 157.4,189.9 157.4,180.9 156.8,180.6" fill="var(--frame)"/>
      <polygon points="166.3,194.9 175.9,200.2 175.9,191.2 166.3,185.9" fill="var(--frame)"/>
      <polygon points="167.4,194.3 174.9,198.5 174.9,191.7 167.4,187.5" fill="var(--glass)"/>
      <polygon points="170.9,197.4 171.5,197.7 171.5,188.7 170.9,188.4" fill="var(--frame)"/>
      <polygon points="180.4,202.7 190,208 190,199 180.4,193.7" fill="var(--frame)"/>
      <polygon points="181.5,202.1 189,206.3 189,199.5 181.5,195.3" fill="var(--glass)"/>
      <polygon points="185,205.2 185.6,205.5 185.6,196.5 185,196.2" fill="var(--frame)"/>
      <polygon points="194.5,210.5 204.1,215.8 204.1,206.8 194.5,201.5" fill="var(--frame)"/>
      <polygon points="195.6,209.9 203.1,214.1 203.1,207.3 195.6,203.1" fill="var(--glass)"/>
      <polygon points="199.1,213 199.7,213.3 199.7,204.3 199.1,204" fill="var(--frame)"/>
      <polygon points="241.8,201.1 235,204.8 235,195.8 241.8,192.1" fill="var(--frame)"/>
      <polygon points="240.7,200.6 236,203.2 236,196.4 240.7,193.8" fill="var(--glass)"/>
      <polygon points="238.5,202.9 238.1,203.1 238.1,194.1 238.5,193.9" fill="var(--frame)"/>
      <polygon points="231.4,206.8 224.7,210.6 224.7,201.6 231.4,197.8" fill="var(--frame)"/>
      <polygon points="230.4,206.3 225.7,208.9 225.7,202.1 230.4,199.5" fill="var(--glass)"/>
      <polygon points="228.2,208.6 227.8,208.8 227.8,199.8 228.2,199.6" fill="var(--frame)"/>
      <polygon points="221.1,212.5 214.3,216.3 214.3,207.3 221.1,203.5" fill="var(--frame)"/>
      <polygon points="220.1,212 215.4,214.6 215.4,207.8 220.1,205.2" fill="var(--glass)"/>
      <polygon points="217.8,214.3 217.4,214.6 217.4,205.6 217.8,205.3" fill="var(--frame)"/>
      <polygon points="247.8,188.7 209.2,210.1 209.2,207.5 247.8,186.1" fill="var(--gedung-band)"/>
      <polygon points="144.4,174.2 209.2,210.1 209.2,207.5 144.4,171.6" fill="var(--metal-lit)"/>
      <polygon points="182.9,150.3 247.8,186.1 209.2,207.5 144.4,171.6" fill="var(--roof-light)"/>
      <polyline points="148.6,189.5 204.1,220.2" fill="none" stroke="var(--metal-line)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="148.6,192 148.6,188.8" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="161.8,199.3 161.8,196.1" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="174.9,206.6 174.9,203.4" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="188.1,213.9 188.1,210.7" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="201.2,221.2 201.2,218" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g data-lantai="4">
      <polygon points="244.5,186.5 209.7,205.7 209.7,188.7 244.5,169.5" fill="var(--gedung-side)"/>
      <polygon points="148.6,171.9 209.7,205.7 209.7,188.7 148.6,154.9" fill="var(--gedung-front)"/>
      <polygon points="183.4,135.7 244.5,169.5 209.7,188.7 148.6,154.9" fill="var(--flat-roof)"/>
      <polygon points="152.2,170.1 161.8,175.4 161.8,166.4 152.2,161.1" fill="var(--frame)"/>
      <polygon points="153.3,169.5 160.8,173.7 160.8,166.9 153.3,162.7" fill="var(--glass)"/>
      <polygon points="156.8,172.6 157.4,172.9 157.4,163.9 156.8,163.6" fill="var(--frame)"/>
      <polygon points="166.3,177.9 175.9,183.2 175.9,174.2 166.3,168.9" fill="var(--frame)"/>
      <polygon points="167.4,177.3 174.9,181.5 174.9,174.7 167.4,170.5" fill="var(--glass)"/>
      <polygon points="170.9,180.4 171.5,180.7 171.5,171.7 170.9,171.4" fill="var(--frame)"/>
      <polygon points="180.4,185.7 190,191 190,182 180.4,176.7" fill="var(--frame)"/>
      <polygon points="181.5,185.1 189,189.3 189,182.5 181.5,178.3" fill="var(--glass)"/>
      <polygon points="185,188.2 185.6,188.5 185.6,179.5 185,179.2" fill="var(--frame)"/>
      <polygon points="194.5,193.5 204.1,198.8 204.1,189.8 194.5,184.5" fill="var(--frame)"/>
      <polygon points="195.6,192.9 203.1,197.1 203.1,190.3 195.6,186.1" fill="var(--glass)"/>
      <polygon points="199.1,196 199.7,196.3 199.7,187.3 199.1,187" fill="var(--frame)"/>
      <polygon points="241.8,184.1 235,187.8 235,178.8 241.8,175.1" fill="var(--frame)"/>
      <polygon points="240.7,183.6 236,186.2 236,179.4 240.7,176.8" fill="var(--glass)"/>
      <polygon points="238.5,185.9 238.1,186.1 238.1,177.1 238.5,176.9" fill="var(--frame)"/>
      <polygon points="231.4,189.8 224.7,193.6 224.7,184.6 231.4,180.8" fill="var(--frame)"/>
      <polygon points="230.4,189.3 225.7,191.9 225.7,185.1 230.4,182.5" fill="var(--glass)"/>
      <polygon points="228.2,191.6 227.8,191.8 227.8,182.8 228.2,182.6" fill="var(--frame)"/>
      <polygon points="221.1,195.5 214.3,199.3 214.3,190.3 221.1,186.5" fill="var(--frame)"/>
      <polygon points="220.1,195 215.4,197.6 215.4,190.8 220.1,188.2" fill="var(--glass)"/>
      <polygon points="217.8,197.3 217.4,197.6 217.4,188.6 217.8,188.3" fill="var(--frame)"/>
      <polygon points="247.8,171.7 209.2,193.1 209.2,190.5 247.8,169.1" fill="var(--gedung-band)"/>
      <polygon points="144.4,157.2 209.2,193.1 209.2,190.5 144.4,154.6" fill="var(--metal-lit)"/>
      <polygon points="182.9,133.3 247.8,169.1 209.2,190.5 144.4,154.6" fill="var(--roof-light)"/>
    </g>
    <polygon points="248.2,169.5 209.7,190.8 209.7,188.8 248.2,167.5" fill="var(--gedung-band)"/>
    <polygon points="144.8,154.9 209.7,190.8 209.7,188.8 144.8,152.9" fill="var(--metal-lit)"/>
    <polygon points="183.4,131.6 248.2,167.5 209.7,188.8 144.8,152.9" fill="var(--flat-roof)"/>
    <polygon points="208.8,155 197.5,161.2 197.5,157.2 208.8,151" fill="var(--metal)"/>
    <polygon points="176.8,149.8 197.5,161.2 197.5,157.2 176.8,145.8" fill="var(--wall-side)"/>
    <polygon points="188.1,139.6 208.8,151 197.5,157.2 176.8,145.8" fill="var(--plaster)"/>
    <polygon points="222.9,162.8 212.5,168.5 212.5,163.5 222.9,157.8" fill="var(--metal)"/>
    <polygon points="201.2,162.3 212.5,168.5 212.5,163.5 201.2,157.3" fill="var(--metal-line)"/>
    <polygon points="211.6,151.6 222.9,157.8 212.5,163.5 201.2,157.3" fill="var(--metal-lit)"/>
    <g transform="matrix(.94 .52 0 1 147.8 159.5)">
      <rect width="61" height="15" rx="1.3" fill="var(--sign-paper)"/>
      <rect width="61" height="2.7" fill="var(--sign-green)"/>
      <text x="30.5" y="11.5" text-anchor="middle" font-family="DM Sans,Arial,sans-serif" font-weight="600" font-size="7.8" fill="var(--sign-ink)">GEDUNG WARGA</text>
    </g>
    <polygon points="190,234.8 183.4,238.4 183.4,236.6 190,233" fill="var(--metal)"/>
    <polygon points="162.7,227 183.4,238.4 183.4,236.6 162.7,225.2" fill="var(--gedung-band)"/>
    <polygon points="169.3,221.6 190,233 183.4,236.6 162.7,225.2" fill="var(--metal-lit)"/>
    <polygon points="188.1,248.8 182.4,251.9 182.4,250.2 188.1,247.1" fill="var(--wall-side)"/>
    <polygon points="163.6,241.5 182.4,251.9 182.4,250.2 163.6,239.8" fill="var(--paving)"/>
    <polygon points="169.3,236.7 188.1,247.1 182.4,250.2 163.6,239.8" fill="var(--plaster)"/>
  </g>
`,
    ],
    [
      -33.5,
      `
<polygon points="678.8,204.1 761.5,249.8 709.8,278.4 627.1,232.7" fill="var(--plot-shadow)"/>
<polygon points="757.7,244.6 707,272.7 707,239.7 757.7,211.6" fill="var(--wall-side)"/>
<polygon points="627.1,228.5 707,272.7 707,239.7 627.1,195.5" fill="var(--wall)"/>
<polygon points="677.8,167.4 757.7,211.6 707,239.7 627.1,195.5" fill="var(--plaster)"/>
<polygon points="630.7,225.7 650.7,236.7 650.7,225.7 630.7,214.7" fill="var(--frame)"/>
<polygon points="631.8,225.1 649.7,235 649.7,226.2 631.8,216.3" fill="var(--glass)"/>
<polygon points="640.3,231 641.5,231.6 641.5,220.6 640.3,220" fill="var(--frame)"/>
<polygon points="754.1,241.8 737.8,250.8 737.8,240.8 754.1,231.8" fill="var(--frame)"/>
<polygon points="753,241.2 738.8,249.1 738.8,241.3 753,233.4" fill="var(--glass)"/>
<polygon points="746.3,246.1 745.3,246.6 745.3,236.6 746.3,236.1" fill="var(--frame)"/>
<polygon points="666.7,250.8 687.5,262.3 687.5,247.3 666.7,235.8" fill="var(--door)"/>
<polygon points="677.8,165.4 761.5,211.6 734.2,214.7 650.6,168.4" fill="var(--metal-lit)"/>
<polygon points="650.6,168.4 734.2,214.7 707,241.8 623.3,195.5" fill="var(--metal)"/>
<polygon points="761.5,211.6 707,241.8 734.2,214.7" fill="var(--wall-warm)"/>
<polyline points="645.1,173.9 728.8,220.1" fill="none" stroke="var(--metal-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="639.7,179.3 723.3,225.6" fill="none" stroke="var(--metal-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="634.2,184.7 717.9,231" fill="none" stroke="var(--metal-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="628.8,190.1 712.4,236.4" fill="none" stroke="var(--metal-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="653.4,170 626.1,197.1" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="658.1,172.6 630.8,199.7" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="662.8,175.2 635.5,202.3" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="667.5,177.8 640.2,204.9" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="672.2,180.4 644.9,207.5" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="676.9,183 649.6,210.1" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="681.6,185.6 654.3,212.7" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="686.3,188.2 659,215.3" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="691,190.8 663.7,217.9" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="695.7,193.4 668.4,220.5" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="700.4,196 673.1,223.1" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="705.1,198.6 677.8,225.7" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="709.8,201.2 682.5,228.3" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="714.5,203.8 687.2,230.9" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="719.2,206.4 691.9,233.5" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="723.9,209 696.6,236.1" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="728.6,211.6 701.3,238.7" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="733.3,214.2 706,241.3" fill="none" stroke="var(--metal-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="650.6,168.4 734.2,214.7" fill="none" stroke="var(--ridge)" stroke-width="2.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="623.3,195.5 707,241.8" fill="none" stroke="var(--metal-line)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<g transform="matrix(.94 .52 0 1 624.2 194)">
    <rect width="89" height="15" rx="1.3" fill="var(--sign-paper)"/>
    <rect width="89" height="2.7" fill="var(--sign-green)"/>
    <text x="44.5" y="11.5" text-anchor="middle" font-family="DM Sans,Arial,sans-serif" font-weight="600" font-size="10" fill="var(--sign-ink)">SPPG</text>
  </g>
`,
    ],
    [
      -20,
      `
<ellipse cx="577.5" cy="244.6" rx="10.4" ry="4" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(573.5 243.6) scale(0.8)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-16 -20q3 -7 16 -8q14 0 17 8q-5 5 -17 3q-10 3 -16 -3Z" fill="var(--leaf)"/>
    <path d="M-13 -28q3 -7 13 -8q11 0 14 8q-5 5 -14 3q-10 3 -13 -3Z" fill="var(--leaf)"/>
    <path d="M-8 -35q3 -7 8 -8q6 0 9 8q-5 5 -9 3q-10 3 -8 -3Z" fill="var(--leaf-lit)"/>
  </g>
`,
    ],
    [
      -3,
      `
<ellipse cx="151.7" cy="253.4" rx="12.3" ry="4.8" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(147.7 252.4) scale(0.9)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-16 -20q3 -7 16 -8q14 0 17 8q-5 5 -17 3q-10 3 -16 -3Z" fill="var(--leaf)"/>
    <path d="M-13 -28q3 -7 13 -8q11 0 14 8q-5 5 -14 3q-10 3 -13 -3Z" fill="var(--leaf)"/>
    <path d="M-8 -35q3 -7 8 -8q6 0 9 8q-5 5 -9 3q-10 3 -8 -3Z" fill="var(--leaf-lit)"/>
  </g>
`,
    ],
    [
      10,
      `
<g transform="translate(643 259.2)">
    <use href="#veh-T-boks"/>
  </g>
`,
    ],
    [
      12,
      `
<ellipse cx="312.4" cy="261.2" rx="9.9" ry="3.8" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(308.4 260.2) scale(0.8)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0 0q7 -18 2 -34" fill="none" stroke="var(--trunk)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 -33q-7.9799999999999995 -5 -19 2q6.08 -3 19 -2Z" fill="var(--leaf)"/>
    <path d="M2 -33q-5.46 -13 -13 -6q4.16 5 13 6Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q-1.68 -19 -4 -12q1.28 11 4 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q3.78 -19 9 -12q-2.88 11 -9 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.9799999999999995 -12 19 -5q-6.08 4 -19 5Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.14 -3 17 4q-5.44 -5 -17 -4Z" fill="var(--leaf)"/>
    <path d="M2 -33q3.36 1 8 8q-2.56 -9 -8 -8Z" fill="var(--leaf)"/>
    <path d="M2 -33q-4.2 2 -10 9q3.2 -10 10 -9Z" fill="var(--leaf)"/>
  </g>
`,
    ],
    [
      21.5,
      `
<polyline points="96.9,244.3 154.2,276" fill="none" stroke="var(--timber)" stroke-width="1.8" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="96.9,240.3 154.2,272" fill="none" stroke="var(--timber)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="96.9,249.3 96.9,238.3" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="103.3,252.8 103.3,241.8" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="109.6,256.4 109.6,245.4" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="116,259.9 116,248.9" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="122.4,263.4 122.4,252.4" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="128.8,266.9 128.8,255.9" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="135.1,270.5 135.1,259.5" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="141.5,274 141.5,263" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="147.9,277.5 147.9,266.5" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="154.2,281 154.2,270" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      28,
      `
<ellipse cx="763.6" cy="269.6" rx="14.3" ry="5.5" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(759.6 268.6) scale(1.1)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
    [
      42,
      `
<ellipse cx="148.8" cy="276.8" rx="13.3" ry="5.1" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(144.8 275.8) scale(1)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
    [
      73.5,
      `
<polygon points="225.7,275.8 265.2,297.7 228.5,318 189,296.1" fill="var(--plot-shadow)"/>
<polygon points="261.4,292.5 225.7,312.2 225.7,269.2 261.4,249.5" fill="var(--wall-side)"/>
<polygon points="189,292 225.7,312.2 225.7,269.2 189,249" fill="var(--wall)"/>
<polygon points="224.7,229.2 261.4,249.5 225.7,269.2 189,249" fill="var(--plaster)"/>
<polygon points="263.3,271 225.7,291.8 225.7,289.4 263.3,268.6" fill="var(--metal-line)"/>
<polygon points="187.1,270.5 225.7,291.8 225.7,289.4 187.1,268.1" fill="var(--roof-light)"/>
<polygon points="224.7,247.3 263.3,268.6 225.7,289.4 187.1,268.1" fill="var(--plaster)"/>
<polygon points="193.6,267.1 204.3,273 204.3,264 193.6,258.1" fill="var(--frame)"/>
<polygon points="194.7,266.6 203.2,271.3 203.2,264.5 194.7,259.8" fill="var(--glass)"/>
<polygon points="198.7,269.9 199.4,270.3 199.4,261.3 198.7,260.9" fill="var(--frame)"/>
<polygon points="210.1,276.2 220.8,282.1 220.8,273.1 210.1,267.2" fill="var(--frame)"/>
<polygon points="211.2,275.7 219.7,280.4 219.7,273.6 211.2,268.9" fill="var(--glass)"/>
<polygon points="215.2,279 215.9,279.4 215.9,270.4 215.2,270" fill="var(--frame)"/>
<polygon points="192.7,289.1 201.9,294.2 201.9,283.2 192.7,278.1" fill="var(--frame)"/>
<polygon points="193.7,288.6 200.8,292.5 200.8,283.7 193.7,279.8" fill="var(--glass)"/>
<polygon points="197.1,291.5 197.6,291.8 197.6,280.8 197.1,280.5" fill="var(--frame)"/>
<polygon points="257.7,289.6 246.3,295.9 246.3,285.9 257.7,279.6" fill="var(--frame)"/>
<polygon points="256.7,289.1 247.3,294.3 247.3,286.5 256.7,281.3" fill="var(--glass)"/>
<polygon points="252.2,292.6 251.6,293 251.6,283 252.2,282.6" fill="var(--frame)"/>
<polygon points="207.1,302.3 216.6,307.5 216.6,292.5 207.1,287.3" fill="var(--door)"/>
<polygon points="265.2,249.5 225.7,271.3 225.7,268.3 265.2,246.5" fill="var(--metal-line)"/>
<polygon points="185.3,249 225.7,271.3 225.7,268.3 185.3,246" fill="var(--metal-lit)"/>
<polygon points="224.7,224.1 265.2,246.5 225.7,268.3 185.3,246" fill="var(--roof-light)"/>
<polygon points="224.7,227 259.5,246.3 225.7,265 190.9,245.8" fill="var(--flat-roof)"/>
<polyline points="221,230.1 253.9,248.3" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="216.3,232.7 249.2,250.9" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="211.6,235.3 244.5,253.5" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="206.9,237.9 239.8,256.1" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="202.2,240.5 235.1,258.7" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="197.5,243.1 230.4,261.3" fill="none" stroke="var(--metal-line)" stroke-width="0.6" opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      83.0,
      `
<polygon points="662.8,283.6 697.6,302.9 666.5,320 631.8,300.8" fill="var(--plot-shadow)"/>
<polygon points="693.8,297.7 663.7,314.3 663.7,293.3 693.8,276.7" fill="var(--wall-side)"/>
<polygon points="631.8,296.6 663.7,314.3 663.7,293.3 631.8,275.6" fill="var(--wall)"/>
<polygon points="661.8,259 693.8,276.7 663.7,293.3 631.8,275.6" fill="var(--plaster)"/>
<polygon points="635.4,293.8 643.4,298.2 643.4,287.2 635.4,282.8" fill="var(--frame)"/>
<polygon points="636.5,293.2 642.4,296.5 642.4,287.7 636.5,284.4" fill="var(--glass)"/>
<polygon points="639.3,295.9 639.7,296.2 639.7,285.2 639.3,284.9" fill="var(--frame)"/>
<polygon points="690.1,294.8 680.5,300.1 680.5,290.1 690.1,284.8" fill="var(--frame)"/>
<polygon points="689.1,294.3 681.5,298.5 681.5,290.7 689.1,286.5" fill="var(--glass)"/>
<polygon points="685.5,297.4 684.9,297.7 684.9,287.7 685.5,287.4" fill="var(--frame)"/>
<polygon points="647.5,305.6 655.8,310.2 655.8,295.2 647.5,290.6" fill="var(--door)"/>
<polygon points="661.8,256.9 697.6,276.7 680.6,277 644.9,257.3" fill="var(--roof-lit)"/>
<polygon points="644.9,257.3 680.6,277 663.7,295.4 628,275.6" fill="var(--roof)"/>
<polygon points="697.6,276.7 663.7,295.4 680.6,277" fill="var(--wall-warm)"/>
<polyline points="641.5,261 677.3,280.7" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="638.2,264.6 673.9,284.4" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="634.8,268.3 670.5,288.1" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="631.4,272 667.1,291.7" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="647.7,258.8 630.8,277.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="652.4,261.4 635.5,279.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="657.1,264 640.2,282.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="661.8,266.6 644.9,285" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="666.5,269.2 649.6,287.6" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="671.2,271.8 654.3,290.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="675.9,274.4 659,292.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="644.9,257.3 680.6,277" fill="none" stroke="var(--ridge)" stroke-width="2.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="628,275.6 663.7,295.4" fill="none" stroke="var(--roof-line)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      133,
      `
<ellipse cx="681.8" cy="324.2" rx="11" ry="4.2" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(677.8 323.2) scale(0.8)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
    [
      167,
      `
<polygon points="469.1,335.6 464.4,338.2 464.4,322.2 469.1,319.6" fill="var(--wall-side)"/>
<polygon points="460.7,336.2 464.4,338.2 464.4,322.2 460.7,320.2" fill="var(--plaster)"/>
<polygon points="465.4,317.6 469.1,319.6 464.4,322.2 460.7,320.2" fill="var(--roof-light)"/>
<polygon points="470.6,319.6 464.4,323.1 464.4,319.8 470.6,316.3" fill="var(--roof)"/>
<polygon points="459.2,320.2 464.4,323.1 464.4,319.8 459.2,316.9" fill="var(--roof-line)"/>
<polygon points="465.4,313.4 470.6,316.3 464.4,319.8 459.2,316.9" fill="var(--roof-lit)"/>
<polygon points="495.5,350.2 490.8,352.8 490.8,336.8 495.5,334.2" fill="var(--wall-side)"/>
<polygon points="487,350.7 490.8,352.8 490.8,336.8 487,334.7" fill="var(--plaster)"/>
<polygon points="491.7,332.1 495.5,334.2 490.8,336.8 487,334.7" fill="var(--roof-light)"/>
<polygon points="497,334.2 490.8,337.6 490.8,334.3 497,330.9" fill="var(--roof)"/>
<polygon points="485.5,334.7 490.8,337.6 490.8,334.3 485.5,331.4" fill="var(--roof-line)"/>
<polygon points="491.7,328 497,330.9 490.8,334.3 485.5,331.4" fill="var(--roof-lit)"/>
<polygon points="495.5,333.2 490.8,335.8 490.8,332.6 495.5,330" fill="var(--roof)"/>
<polygon points="460.7,319.2 490.8,335.8 490.8,332.6 460.7,316" fill="var(--roof-line)"/>
<polygon points="465.4,313.4 495.5,330 490.8,332.6 460.7,316" fill="var(--roof-lit)"/>
<polyline points="493.6,332.2 493.6,317.2" fill="none" stroke="var(--trunk)" stroke-width="1.1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M493.6 317.2q5 -2 10 0v3q-5 -2 -10 0Z" fill="var(--flag)"/>
<path d="M493.6 320.2q5 -2 10 0v3q-5 -2 -10 0Z" fill="var(--sign-paper)"/>
`,
    ],
    [
      182,
      `
<ellipse cx="397" cy="349.6" rx="9.4" ry="3.6" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(393 348.6) scale(0.7)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
    [
      225,
      `
<polyline points="330,371 330,353" fill="none" stroke="var(--pole)" stroke-width="1.7" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polygon points="330,346 336,352 330,358 324,352" fill="var(--sign-ochre)" stroke="var(--sign-ink)" stroke-width="0.9" stroke-linejoin="round"/>
<polyline points="330,349 330,355" fill="none" stroke="var(--sign-ink)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="328,352 332,352" fill="none" stroke="var(--sign-ink)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      236,
      `
<g id="sd-tunas-bangsa">
    <polygon points="432.5,348.6 520.8,397.5 489.8,414.7 401.5,365.8" fill="var(--plot-shadow)"/>
    <polygon points="517.1,392.3 487,409 487,384 517.1,367.3" fill="var(--wall-side)"/>
    <polygon points="401.5,361.6 487,409 487,384 401.5,336.6" fill="var(--plaster)"/>
    <polygon points="431.5,320 517.1,367.3 487,384 401.5,336.6" fill="var(--plaster)"/>
    <polygon points="406.1,359.3 418.3,366.1 418.3,355.1 406.1,348.3" fill="var(--frame)"/>
    <polygon points="407.1,358.8 417.3,364.4 417.3,355.6 407.1,350" fill="var(--glass)"/>
    <polygon points="411.9,362.5 412.7,362.9 412.7,351.9 411.9,351.5" fill="var(--frame)"/>
    <polygon points="426.7,370.7 439,377.5 439,366.5 426.7,359.7" fill="var(--frame)"/>
    <polygon points="427.8,370.2 437.9,375.8 437.9,367 427.8,361.4" fill="var(--glass)"/>
    <polygon points="432.6,374 433.3,374.4 433.3,363.4 432.6,363" fill="var(--frame)"/>
    <polygon points="447.4,382.2 459.6,388.9 459.6,377.9 447.4,371.2" fill="var(--frame)"/>
    <polygon points="448.5,381.6 458.6,387.3 458.6,378.5 448.5,372.8" fill="var(--glass)"/>
    <polygon points="453.3,385.4 454,385.8 454,374.8 453.3,374.4" fill="var(--frame)"/>
    <polygon points="468.1,393.6 480.3,400.4 480.3,389.4 468.1,382.6" fill="var(--frame)"/>
    <polygon points="469.1,393.1 479.3,398.7 479.3,389.9 469.1,384.3" fill="var(--glass)"/>
    <polygon points="474,396.9 474.7,397.3 474.7,386.3 474,385.9" fill="var(--frame)"/>
    <polygon points="515.3,387.4 505.9,392.6 505.9,382.6 515.3,377.4" fill="var(--frame)"/>
    <polygon points="514.3,386.9 506.9,390.9 506.9,383.1 514.3,379.1" fill="var(--glass)"/>
    <polygon points="510.8,389.9 510.2,390.2 510.2,380.2 510.8,379.9" fill="var(--frame)"/>
    <polygon points="500.3,395.7 490.9,400.9 490.9,390.9 500.3,385.7" fill="var(--frame)"/>
    <polygon points="499.2,395.2 491.9,399.3 491.9,391.5 499.2,387.4" fill="var(--glass)"/>
    <polygon points="495.7,398.2 495.2,398.5 495.2,388.5 495.7,388.2" fill="var(--frame)"/>
    <polygon points="431.5,317.9 520.8,367.3 503.9,364.7 414.6,315.3" fill="var(--roof-lit)"/>
    <polygon points="414.6,315.3 503.9,364.7 487,386 397.7,336.6" fill="var(--roof)"/>
    <polygon points="520.8,367.3 487,386 503.9,364.7" fill="var(--wall-warm)"/>
    <polyline points="411.2,319.6 500.5,369" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="407.9,323.8 497.2,373.2" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="404.5,328.1 493.8,377.5" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="401.1,332.4 490.4,381.8" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="417.4,316.8 400.5,338.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="422.1,319.4 405.2,340.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="426.8,322 409.9,343.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="431.5,324.6 414.6,346" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="436.2,327.2 419.3,348.6" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="440.9,329.8 424,351.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="445.6,332.4 428.7,353.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="450.3,335 433.4,356.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="455,337.6 438.1,359" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="459.7,340.2 442.8,361.6" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="464.4,342.8 447.5,364.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="469.1,345.4 452.2,366.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="473.8,348 456.9,369.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="478.5,350.6 461.6,372" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="483.2,353.2 466.3,374.6" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="487.9,355.8 471,377.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="492.6,358.4 475.7,379.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="497.3,361 480.4,382.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="502,363.6 485.1,385" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="414.6,315.3 503.9,364.7" fill="none" stroke="var(--ridge)" stroke-width="2.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="397.7,336.6 487,386" fill="none" stroke="var(--roof-line)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <g transform="matrix(.94 .52 0 1 400.5 336.2)">
      <rect width="91" height="15" rx="1.3" fill="var(--sign-paper)"/>
      <rect width="91" height="2.7" fill="var(--sign-red)"/>
      <text x="45.5" y="11.5" text-anchor="middle" font-family="DM Sans,Arial,sans-serif" font-weight="600" font-size="8.9" fill="var(--sign-ink)">SD TUNAS BANGSA</text>
    </g>
    <polygon points="404.1,367.3 402.4,368.2 402.4,356.2 404.1,355.3" fill="var(--wall-side)"/>
    <polygon points="400.7,367.3 402.4,368.2 402.4,356.2 400.7,355.3" fill="var(--wall)"/>
    <polygon points="402.4,354.3 404.1,355.3 402.4,356.2 400.7,355.3" fill="var(--plaster)"/>
    <polygon points="441.7,388.1 440,389 440,377 441.7,376.1" fill="var(--wall-side)"/>
    <polygon points="438.3,388.1 440,389 440,377 438.3,376.1" fill="var(--wall)"/>
    <polygon points="440,375.1 441.7,376.1 440,377 438.3,376.1" fill="var(--plaster)"/>
    <polygon points="479.3,408.9 477.6,409.8 477.6,397.8 479.3,396.9" fill="var(--wall-side)"/>
    <polygon points="475.9,408.9 477.6,409.8 477.6,397.8 475.9,396.9" fill="var(--wall)"/>
    <polygon points="477.6,395.9 479.3,396.9 477.6,397.8 475.9,396.9" fill="var(--plaster)"/>
    <polygon points="487,398 480.4,401.6 480.4,399.2 487,395.6" fill="var(--roof-line)"/>
    <polygon points="393,353.3 480.4,401.6 480.4,399.2 393,350.9" fill="var(--roof)"/>
    <polygon points="399.6,347.2 487,395.6 480.4,399.2 393,350.9" fill="var(--roof-lit)"/>
  </g>
`,
    ],
    [
      237,
      `
<g class="warga-lapangan-sd" transform="translate(395.8 377.2)">
    <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
    <g class="kaki-satu">
      <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g class="kaki-dua">
      <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--metal-line)"/>
    <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--coat-sage)"/>
    <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
    <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
  </g>
`,
    ],
    [
      241.5,
      `
<polygon points="532.1,370.5 560.3,386.1 538.7,398 510.5,382.4" fill="var(--plot-shadow)"/>
<polygon points="556.6,380.9 535.9,392.3 535.9,376.3 556.6,364.9" fill="var(--wall-side)"/>
<polygon points="510.5,378.3 535.9,392.3 535.9,376.3 510.5,362.3" fill="var(--wall)"/>
<polygon points="531.2,350.8 556.6,364.9 535.9,376.3 510.5,362.3" fill="var(--plaster)"/>
<polygon points="514.2,375.4 520.7,379.1 520.7,368.1 514.2,364.4" fill="var(--frame)"/>
<polygon points="515.2,374.9 519.7,377.4 519.7,368.6 515.2,366.1" fill="var(--glass)"/>
<polygon points="517.3,377.2 517.7,377.4 517.7,366.4 517.3,366.2" fill="var(--frame)"/>
<polygon points="552.9,378 546.3,381.7 546.3,371.7 552.9,368" fill="var(--frame)"/>
<polygon points="551.9,377.5 547.3,380 547.3,372.2 551.9,369.7" fill="var(--glass)"/>
<polygon points="549.7,379.8 549.3,380 549.3,370 549.7,369.8" fill="var(--frame)"/>
<polygon points="522.9,385.5 529.5,389.1 529.5,374.1 522.9,370.5" fill="var(--door)"/>
<polygon points="531.2,348.8 560.3,364.9 548.1,362.6 519,346.5" fill="var(--roof-lit)"/>
<polygon points="519,346.5 548.1,362.6 535.9,378.4 506.7,362.3" fill="var(--roof)"/>
<polygon points="560.3,364.9 535.9,378.4 548.1,362.6" fill="var(--wall-warm)"/>
<polyline points="516.5,349.7 545.7,365.8" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="514.1,352.8 543.2,368.9" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="511.6,356 540.8,372.1" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="509.2,359.1 538.3,375.2" fill="none" stroke="var(--roof-line)" stroke-width="0.8" opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="521.8,348.1 509.6,363.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="526.5,350.7 514.3,366.4" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="531.2,353.3 519,369" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="535.9,355.9 523.7,371.6" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="540.6,358.5 528.4,374.2" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="545.3,361.1 533.1,376.8" fill="none" stroke="var(--roof-line)" stroke-width="0.5" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="519,346.5 548.1,362.6" fill="none" stroke="var(--ridge)" stroke-width="2.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="506.7,362.3 535.9,378.4" fill="none" stroke="var(--roof-line)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<g transform="matrix(.94 .52 0 1 507.7 360.8)">
    <rect width="31" height="15" rx="1.3" fill="var(--sign-paper)"/>
    <rect width="31" height="2.7" fill="var(--sign-green)"/>
    <text x="15.5" y="11.5" text-anchor="middle" font-family="DM Sans,Arial,sans-serif" font-weight="600" font-size="10" fill="var(--sign-ink)">POS RONDA</text>
  </g>
`,
    ],
    [
      245,
      `
<ellipse cx="330.3" cy="382.4" rx="13" ry="5" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(326.3 381.4) scale(1)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-16 -20q3 -7 16 -8q14 0 17 8q-5 5 -17 3q-10 3 -16 -3Z" fill="var(--leaf)"/>
    <path d="M-13 -28q3 -7 13 -8q11 0 14 8q-5 5 -14 3q-10 3 -13 -3Z" fill="var(--leaf)"/>
    <path d="M-8 -35q3 -7 8 -8q6 0 9 8q-5 5 -9 3q-10 3 -8 -3Z" fill="var(--leaf-lit)"/>
  </g>
`,
    ],
    [
      286,
      `
<g id="tiang-sekolah">
    <polygon points="417.4,402.7 411.8,405.8 411.8,403.3 417.4,400.2" fill="var(--metal)"/>
    <polygon points="406.2,402.7 411.8,405.8 411.8,403.3 406.2,400.2" fill="var(--metal-lit)"/>
    <polygon points="411.8,397.1 417.4,400.2 411.8,403.3 406.2,400.2" fill="var(--plaster)"/>
    <polyline points="411.8,400.7 411.8,357.7" fill="none" stroke="var(--sign-ink)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="411.8" cy="357.7" r="1.4" fill="var(--sign-ochre)"/>
    <path d="M411.8 359.7q5 -2 10 0t10 0v5q-5 2 -10 0t-10 0Z" fill="var(--flag-merah)"/>
    <path d="M411.8 364.7q5 -2 10 0t10 0v5q-5 2 -10 0t-10 0Z" fill="var(--flag-putih)"/>
  </g>
`,
    ],
    [
      290,
      `
<g class="warga-lapangan-sd" transform="translate(440 404.8)">
    <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
    <g class="kaki-satu">
      <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g class="kaki-dua">
      <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--flag-merah)"/>
    <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--flag-putih)"/>
    <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
    <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
  </g>
`,
    ],
    [
      297,
      `
<g class="warga-lapangan-sd" transform="translate(444.7 408.4)">
    <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
    <g class="kaki-satu">
      <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g class="kaki-dua">
      <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--flag-merah)"/>
    <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--flag-putih)"/>
    <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
    <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
  </g>
`,
    ],
    [
      327,
      `
<ellipse cx="490.1" cy="425" rx="10.9" ry="4.2" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(486.1 424) scale(0.8)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0 0q7 -18 2 -34" fill="none" stroke="var(--trunk)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 -33q-7.9799999999999995 -5 -19 2q6.08 -3 19 -2Z" fill="var(--leaf)"/>
    <path d="M2 -33q-5.46 -13 -13 -6q4.16 5 13 6Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q-1.68 -19 -4 -12q1.28 11 4 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q3.78 -19 9 -12q-2.88 11 -9 12Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.9799999999999995 -12 19 -5q-6.08 4 -19 5Z" fill="var(--leaf-lit)"/>
    <path d="M2 -33q7.14 -3 17 4q-5.44 -5 -17 -4Z" fill="var(--leaf)"/>
    <path d="M2 -33q3.36 1 8 8q-2.56 -9 -8 -8Z" fill="var(--leaf)"/>
    <path d="M2 -33q-4.2 2 -10 9q3.2 -10 10 -9Z" fill="var(--leaf)"/>
  </g>
`,
    ],
    [
      330.5,
      `
<polyline points="516.1,400.3 441.9,441.4" fill="none" stroke="var(--timber)" stroke-width="1.8" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="516.1,396.3 441.9,437.4" fill="none" stroke="var(--timber)" stroke-width="1.6" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="516.1,405.3 516.1,394.3" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="507.9,409.9 507.9,398.9" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="499.6,414.4 499.6,403.4" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="491.4,419 491.4,408" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="483.1,423.6 483.1,412.6" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="474.9,428.1 474.9,417.1" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="466.6,432.7 466.6,421.7" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="458.4,437.3 458.4,426.3" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="450.1,441.8 450.1,430.8" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
<polyline points="441.9,446.4 441.9,435.4" fill="none" stroke="var(--wood-lit)" stroke-width="2.3" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
`,
    ],
    [
      364,
      `
<ellipse cx="440.2" cy="444.3" rx="12.3" ry="4.8" fill="var(--plot-shadow)" opacity="0.9"/>
<g transform="translate(436.2 443.3) scale(0.9)">
    <path d="M-1 0L0 -27M0 -14l-6 -6m7 1l5 -6" fill="none" stroke="var(--trunk)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-15 -20Q-21 -25 -15 -32Q-15 -40 -6 -40Q1 -49 9 -41Q18 -40 17 -33Q23 -25 16 -20Q9 -14 3 -18Q-6 -13 -15 -20Z" fill="var(--leaf)"/>
    <path d="M-15 -30Q-15 -39 -6 -39Q0 -47 7 -40Q11 -37 9 -34Q5 -35 1 -31Q-4 -34 -8 -29Q-12 -26 -15 -30Z" fill="var(--leaf-lit)"/>
    <path d="M-8 -25q3 -3 6 -2m6 5q3 1 6 -2" fill="none" stroke="var(--leaf-line)" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
`,
    ],
  ],
  kabel: `
<path d="M316.9 83.7 Q378.4 125.3 440 150.8" fill="none" stroke="var(--wire)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M319.6 83.7 Q378.4 128 442.7 150.8" fill="none" stroke="var(--wire)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M440 150.8 Q503 124.5 566 82.2" fill="none" stroke="var(--wire)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.7 150.8 Q503 127.2 568.7 82.2" fill="none" stroke="var(--wire)" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
`,
  panah: `
<g data-panah="U" visibility="hidden" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M491.7 250.4L447.5 274.8M449.4 266.5L447.5 274.8L462.6 273.8" stroke="var(--line-bright)" stroke-width="4.9"/>
    <path d="M491.7 250.4L447.5 274.8M449.4 266.5L447.5 274.8L462.6 273.8" stroke="var(--accent-deep)" stroke-width="2.3"/>
  </g>
<g data-panah="T" visibility="hidden" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M446.6 282.6L402.4 258.2M417.4 259.2L402.4 258.2L404.3 266.5" stroke="var(--line-bright)" stroke-width="4.9"/>
    <path d="M446.6 282.6L402.4 258.2M417.4 259.2L402.4 258.2L404.3 266.5" stroke="var(--accent-deep)" stroke-width="2.3"/>
  </g>
<g data-panah="S" visibility="hidden" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M388.3 257.6L432.5 233.2M430.6 241.5L432.5 233.2L417.4 234.2" stroke="var(--line-bright)" stroke-width="4.9"/>
    <path d="M388.3 257.6L432.5 233.2M430.6 241.5L432.5 233.2L417.4 234.2" stroke="var(--accent-deep)" stroke-width="2.3"/>
  </g>
<g data-panah="B" visibility="hidden" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M433.4 225.4L477.6 249.8M462.6 248.8L477.6 249.8L475.7 241.5" stroke="var(--line-bright)" stroke-width="4.9"/>
    <path d="M433.4 225.4L477.6 249.8M462.6 248.8L477.6 249.8L475.7 241.5" stroke="var(--accent-deep)" stroke-width="2.3"/>
  </g>
`,
  pelaku: `
<g class="kendaraan" data-arah="U" data-rute="kiri" data-jenis="motor" data-pos="-142" transform="translate(610.1 200.4)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="U" data-rute="lurus" data-jenis="mobil" data-pos="-142" transform="translate(596 192.6)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="U" data-rute="kanan" data-jenis="ojek" data-pos="-140" transform="translate(580.1 185.9)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="U" data-rute="lurus" data-jenis="angkot" data-pos="-185" transform="translate(636.5 170.3)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="U" data-rute="kiri" data-jenis="motor" data-pos="-197" transform="translate(661.8 171.8)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="T" data-rute="kiri" data-jenis="angkot" data-pos="-142" transform="translate(536.8 348.1)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="T" data-rute="lurus" data-jenis="ojek" data-pos="-142" transform="translate(550.9 340.3)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="T" data-rute="kanan" data-jenis="mobil" data-pos="-140" transform="translate(563.1 331.5)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="T" data-rute="lurus" data-jenis="motor" data-pos="-185" transform="translate(591.3 362.7)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="T" data-rute="kiri" data-jenis="bajaj" data-pos="-197" transform="translate(588.5 376.7)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="S" data-rute="kiri" data-jenis="ojek" data-pos="-142" transform="translate(269.9 307.6)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="S" data-rute="lurus" data-jenis="truk" data-pos="-142" transform="translate(284 315.4)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="S" data-rute="kanan" data-jenis="motor" data-pos="-140" transform="translate(299.9 322.1)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="S" data-rute="lurus" data-jenis="mobil" data-pos="-185" transform="translate(243.5 337.7)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="S" data-rute="kiri" data-jenis="motor" data-pos="-197" transform="translate(218.2 336.2)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="B" data-rute="kiri" data-jenis="mobil" data-pos="-142" transform="translate(343.2 159.9)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="B" data-rute="lurus" data-jenis="motor" data-pos="-142" transform="translate(329.1 167.7)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="B" data-rute="kanan" data-jenis="bajaj" data-pos="-140" transform="translate(316.9 176.5)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="B" data-rute="lurus" data-jenis="ojek" data-pos="-185" transform="translate(288.7 145.3)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="kendaraan" data-arah="B" data-rute="kiri" data-jenis="motor" data-pos="-197" transform="translate(291.5 131.3)">
    <g class="bentuk-mobil">
      <use/>
    </g>
  </g>
<g class="penyeberang" data-arm="S" data-strip="-107" data-side="1" data-delay="0.28" transform="translate(288.7 281.6)">
    <g class="badan-orang">
      <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
      <g class="kaki-satu">
        <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="kaki-dua">
        <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--flag-merah)"/>
      <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--flag-putih)"/>
      <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
      <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
    </g>
  </g>
<g class="penyeberang" data-arm="S" data-strip="-102" data-side="-1" data-delay="0.96" transform="translate(394.9 335.1)">
    <g class="badan-orang">
      <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
      <g class="kaki-satu">
        <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="kaki-dua">
        <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--flag-merah)"/>
      <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--flag-putih)"/>
      <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
      <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
    </g>
  </g>
<g class="penyeberang" data-arm="U" data-strip="-107" data-side="-1" data-delay="0.42" transform="translate(489.8 170.3)">
    <g class="badan-orang">
      <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
      <g class="kaki-satu">
        <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="kaki-dua">
        <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--metal-line)"/>
      <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--coat-sage)"/>
      <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
      <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
    </g>
  </g>
<g class="penyeberang" data-arm="B" data-strip="-106" data-side="1" data-delay="0.8" transform="translate(391.1 170.8)">
    <g class="badan-orang">
      <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
      <g class="kaki-satu">
        <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="kaki-dua">
        <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--metal-line)"/>
      <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--coat-clay)"/>
      <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
      <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
    </g>
  </g>
<g class="penyeberang" data-arm="T" data-strip="-106" data-side="-1" data-delay="0.35" transform="translate(590.4 281)">
    <g class="badan-orang">
      <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
      <g class="kaki-satu">
        <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="kaki-dua">
        <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--flag-merah)"/>
      <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--flag-putih)"/>
      <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
      <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
    </g>
  </g>
<g class="penyeberang" data-arm="T" data-strip="-110" data-side="1" data-delay="0.95" transform="translate(492.6 339.3)">
    <g class="badan-orang">
      <ellipse cx="1" cy="0" rx="3" ry="1.1" fill="var(--car-shadow)" opacity="0.6"/>
      <g class="kaki-satu">
        <polyline points="-1.1,-4 -1.1,-0.5 -2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="kaki-dua">
        <polyline points="1.1,-4 1.2,-0.5 2,0" fill="none" stroke="var(--tire)" stroke-width="1.2" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <path d="M-1.8 -6.3h3.6l.7 3h-4.9Z" fill="var(--metal-line)"/>
      <path d="M-2.2 -9.2Q0 -10.3 2 -9.1l.5 3.6h-5Z" fill="var(--coat-clay)"/>
      <polyline points="-2,-8.5 -2.8,-5.8" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="2,-8.3 2.9,-6" fill="none" stroke="var(--skin)" stroke-width="1" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="0.2" cy="-11" r="1.8" fill="var(--skin)"/>
      <path d="M-1.5 -10.8q-.6 -3.1 2.3 -2.3q1.6 .4 1.1 1.8q-2.4 -.9 -3.4 .5Z" fill="var(--tire)"/>
    </g>
  </g>
`,
  sinyal: `
<g class="sinyal" data-arah="U" transform="translate(601.7 218.6)">
    <ellipse cx="1.5" cy="0.5" rx="3.8" ry="1.6" fill="var(--car-shadow)" opacity="1"/>
    <polyline points="0,0 0,-25" fill="none" stroke="var(--pole)" stroke-width="2.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-24" y="-35" width="48" height="15" rx="3.5" fill="var(--signal-case)"/>
    <circle data-warna="merah" cx="-18" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="kuning" cx="-10" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="hijau" cx="-2" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <text data-detik="" x="12" y="-24" text-anchor="middle" fill="var(--lamp-text)" font-family="IBM Plex Mono,monospace" font-weight="500" font-size="9.3">–</text>
  </g>
<g class="sinyal" data-arah="T" transform="translate(503.9 343.4)">
    <ellipse cx="1.5" cy="0.5" rx="3.8" ry="1.6" fill="var(--car-shadow)" opacity="1"/>
    <polyline points="0,0 0,-25" fill="none" stroke="var(--pole)" stroke-width="2.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-24" y="-35" width="48" height="15" rx="3.5" fill="var(--signal-case)"/>
    <circle data-warna="merah" cx="-18" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="kuning" cx="-10" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="hijau" cx="-2" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <text data-detik="" x="12" y="-24" text-anchor="middle" fill="var(--lamp-text)" font-family="IBM Plex Mono,monospace" font-weight="500" font-size="9.3">–</text>
  </g>
<g class="sinyal" data-arah="S" transform="translate(278.3 289.4)">
    <ellipse cx="1.5" cy="0.5" rx="3.8" ry="1.6" fill="var(--car-shadow)" opacity="1"/>
    <polyline points="0,0 0,-25" fill="none" stroke="var(--pole)" stroke-width="2.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-24" y="-35" width="48" height="15" rx="3.5" fill="var(--signal-case)"/>
    <circle data-warna="merah" cx="-18" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="kuning" cx="-10" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="hijau" cx="-2" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <text data-detik="" x="12" y="-24" text-anchor="middle" fill="var(--lamp-text)" font-family="IBM Plex Mono,monospace" font-weight="500" font-size="9.3">–</text>
  </g>
<g class="sinyal" data-arah="B" transform="translate(376.1 164.6)">
    <ellipse cx="1.5" cy="0.5" rx="3.8" ry="1.6" fill="var(--car-shadow)" opacity="1"/>
    <polyline points="0,0 0,-25" fill="none" stroke="var(--pole)" stroke-width="2.4" opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-24" y="-35" width="48" height="15" rx="3.5" fill="var(--signal-case)"/>
    <circle data-warna="merah" cx="-18" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="kuning" cx="-10" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <circle data-warna="hijau" cx="-2" cy="-27.5" r="2.8" fill="var(--lamp-off)"/>
    <text data-detik="" x="12" y="-24" text-anchor="middle" fill="var(--lamp-text)" font-family="IBM Plex Mono,monospace" font-weight="500" font-size="9.3">–</text>
  </g>
`,
};
if (typeof module === 'object' && module.exports) module.exports = SeniKampung;
