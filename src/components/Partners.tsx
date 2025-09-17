import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
const Partners = () => {
  const [api, setApi] = useState<any>();
  const partners = [{
    name: 'Kaspersky',
    logo: '/lovable-uploads/6771fecd-d0ae-4f1b-ab62-68a9296eacbe.png',
    url: 'https://www.kaspersky.com.br/lp/special-offer?reseller=br_b2c-eg-lf_acq_ona_sem_bra_onl_b2c_google_ppc-ad_______&utm_content=ppc-ad|generic&utm_source=google&utm_medium=cpc&utm_campaign=DM_B2C_LATAM_BR_PPC_Google_LF_PT-BR_B_KWD_EXA_Brand_Pure&gad_source=1&gad_campaignid=21904674676&gbraid=0AAAAA-fVjSHtUhy3wQU8nt334Lfk_rJVQ&gclid=Cj0KCQjww4TGBhCKARIsAFLXndQ381n11kpC0YxbboMO9Gc7-e6kc_jNM68NqKumzBtGxhyr_RzZUjsaAuXUEALw_wcB'
  }, {
    name: 'CorelDRAW',
    logo: '/lovable-uploads/fc7bc7ae-f0df-4b49-905a-2daeb4a9ab12.png',
    url: 'https://www.coreldraw.com/br/product/coreldraw/?x-vehicle=ppc_brkws&utm_medium=cpc&utm_source=google&utm_term=coreldraw&utm_content=&utm_id=11287101014&extensionid=&matchtype=e&device=c&devicemodel=&creative=766780006963&network=g&placement=&campaignid=11287101014&x-source=ppc&x-target=ppc&promo=ppc&campaign_name=CDGS-Search-Brand-Evergreen-BR-PT&gad_source=1&gad_campaignid=11287101014&gbraid=0AAAAADew63QuHlsYN8W8AHfLFhASJ3YxK&gclid=Cj0KCQjww4TGBhCKARIsAFLXndTbH8U3UwlT_elNK9Jo1Le7btrHrIqiEwZa1ABrlWkG_fmBpn1uxJEaAq4pEALw_wcB'
  }, {
    name: 'Autodesk',
    logo: '/lovable-uploads/68044089-2ae5-4b03-accb-692e532c17bc.png',
    url: 'https://www.autodesk.com/br/products?mktvar002=5656927|SEM|22402362435|176248868543|kwd-12548870&utm_source=GGL&utm_medium=SEM&utm_campaign=GGL_DEC_Autodesk_AMER_BR_eComm_SEM_BR_New_EX_0000_5656927_&utm_id=5656927&utm_term=kwd-12548870&mkwid=sUan9O2ac|pcrid|743928744624|pkw|autodesk|pmt|e|pdv|c|slid||pgrid|176248868543|ptaid|kwd-12548870|pid|&utm_medium=cpc&utm_source=google&utm_campaign=GGL_ESTORE_AUTODESK_BZ_POR_BR_SEM_EXACT&utm_term=autodesk&utm_content=sUan9O2ac|pcrid|743928744624|pkw|autodesk|pmt|e|pdv|c|slid||pgrid|176248868543|ptaid|kwd-12548870|&gad_source=1&gad_campaignid=22402362435&gbraid=0AAAAADx7pE1CoCEpHd5PI1pPycQTusfTV&gclid=Cj0KCQjww4TGBhCKARIsAFLXndQ1Vz8jN3G2nxOdKgQyKG-khxKrL0soNZfj0BxMLqt-n5DicVTFApQaAisVEALw_wcB'
  }, {
    name: 'Lenovo',
    logo: '/lovable-uploads/8c789511-0e23-45d1-8add-733ffbb61f20.png',
    url: 'https://www.lenovo.com/br/pt/d/promocoes/?orgRef=https%253A%252F%252Fwww.google.com%252F&visibleDatas=11279%3AThinkPad&cid=br:sem|se|google|j-b2c-commercial-convers-google-search-intelccf|search|commercial&gad_source=1&gad_campaignid=10067044248&gbraid=0AAAAADtpWiAah8g8E8I9SQlXEHf2L2X43&gclid=Cj0KCQjww4TGBhCKARIsAFLXndR6oLLcHm9Fgg_UgPpPFAZnuNt96IzwCp6FsDcYugBByr5gC4gJO10aAtkgEALw_wcB'
  }, {
    name: 'Microsoft',
    logo: '/lovable-uploads/31c12c38-94bf-4372-acce-9e053fd731e9.png',
    url: 'https://www.microsoft.com/pt-br'
  }, {
    name: 'Adobe',
    logo: '/lovable-uploads/ecb9bee8-7fe3-4c64-b202-b6327e60e84b.png',
    url: 'https://www.adobe.com/br/creativecloud/campaign/pricing.html?sdid=2NVQC2QJ&mv=search&mv2=paidsearch&ef_id=Cj0KCQjww4TGBhCKARIsAFLXndTjBWIAJxJ2VJSyvNzBhHvGjSKJfqpey4jbNB_SAjITu8c1S3q4RPMaAhlIEALw_wcB:G:s&s_kwcid=AL!3085!3!459896307784!e!!g!!adobe!188193342!10039593102&gad_source=1&gad_campaignid=188193342&gbraid=0AAAAADxybVowlcBNOU1nOjAy8MDkzVTeV&gclid=Cj0KCQjww4TGBhCKARIsAFLXndTjBWIAJxJ2VJSyvNzBhHvGjSKJfqpey4jbNB_SAjITu8c1S3q4RPMaAhlIEALw_wcB'
  }, {
    name: 'Intelbras',
    logo: '/lovable-uploads/becfd665-febf-44df-9cb3-33923b08b1dc.png',
    url: 'https://loja.intelbras.com.br/?gad_source=1&gad_campaignid=10905497741&gbraid=0AAAAACdR-oqw408GiR9NJrFk0knI7p-sJ&gclid=Cj0KCQjww4TGBhCKARIsAFLXndTMcRuICtovAuw7hcjDDN-jEPw-EqmLlLtAfzI3kb80sUEKYckfTpEaAqnrEALw_wcB'
  }, {
    name: 'ThinkPad',
    logo: '/lovable-uploads/thinkpad-logo.png',
    url: 'https://www.lenovo.com/br/pt/d/promocoes/?orgRef=https%253A%252F%252Fwww.google.com%252F&visibleDatas=11279%3AThinkPad&cid=br:sem|se|google|j-b2c-commercial-convers-google-search-intelccf|search|commercial&gad_source=1&gad_campaignid=10067044248&gbraid=0AAAAADtpWiA_lwVEM3lF5jKuwcCFmQJ5J&gclid=Cj0KCQjwuKnGBhD5ARIsAD19RsaGiy9wnsRIgPm42WohkhEMTs2zPp1HtRISRcskR0S2jhngtRzfw_caAid5EALw_wcB'
  }, {
    name: 'ThinkStation',
    logo: '/lovable-uploads/thinkstation-logo.svg',
    url: 'https://www.lenovo.com/br/pt/c/workstations/thinkstation/thinkstation-p/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOopSxXWjlz0rRuwU7tS1hUFprIH5iqep-mq7vGEdc_XbCWHH9Isw'
  }, {
    name: 'ThinkSystem',
    logo: '/lovable-uploads/thinksystem-logo.png',
    url: 'https://lenovo.com/br/pt/d/promocoes/servidores/?&cid=br:sem|se|google|b2c-isg-convers-google-search-intelccf|search|isg&gad_source=1&gad_campaignid=22788905940&gbraid=0AAAAADtpWiDkGN1KOuP8-J1SXRZFvhHTe&gclid=Cj0KCQjwuKnGBhD5ARIsAD19RsYu3O1QqlJ4DMiYUbtkbMGaKVWpW04_Ld_dMVP6_yJCQUZ5QN7ZptkaArfdEALw_wcB'
  }];
  useEffect(() => {
    if (!api) return;
    const autoplay = () => {
      api.scrollNext();
    };
    const interval = setInterval(autoplay, 2000); // 2 segundos para transição mais rápida

    return () => clearInterval(interval);
  }, [api]);
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"> Principais Parceiros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para oferecer soluções de excelência
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel opts={{
          align: "start",
          loop: true,
          duration: 20
        }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3">
                  <div className="flex items-center justify-center p-8 h-80">
                    {partner.url ? <a href={partner.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-105 transition-transform duration-300">
                        <img src={partner.logo} alt={`Logo ${partner.name}`} className="max-h-64 max-w-full object-contain" />
                      </a> : <img src={partner.logo} alt={`Logo ${partner.name}`} className="max-h-64 max-w-full object-contain" />}
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default Partners;