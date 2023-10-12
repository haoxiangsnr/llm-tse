"use strict";(self.webpackChunkllm_tse_scratch=self.webpackChunkllm_tse_scratch||[]).push([[195],{5639:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var r=a(7294),l=(a(9960),a(2263)),n=a(7961);const i={features:"features_QA7r",featureSvg:"featureSvg_Ggsy",abstract:"abstract_CGn4",table:"table_q78j"};var o=a(859),s=a(9965),u=a(6074),v=a(264),c=a(5968),m=a(6226);const w=a.p+"assets/images/scenarios-341b28b5280b4e1ccfde68d4b21163d1.png",d=a.p+"assets/images/diff-bc1be2126ce81a50e6d9109bbe024b43.png",p=a.p+"assets/images/model_arch-ad318957502d3ddd728e8bf3b5dd4a3c.png";var h=a(7062);const{Meta:x}=o.default,{Title:_,Paragraph:g,Text:E}=s.default,y=[{title:"Mixture",dataIndex:"mixture",key:"mixture",render:e=>r.createElement("audio",{controls:!0,src:e},r.createElement("source",{type:"audio/wav"})),width:200},{title:"Enrollment (Audio)",dataIndex:"enrollAudio",key:"enrollAudio",render:e=>e?r.createElement("audio",{controls:!0,src:e},r.createElement("source",{type:"audio/wav"})):r.createElement(E,{type:"danger"},"w/o"),width:200},{title:"Enrollment (Text)",dataIndex:"enrollText",key:"enrollText",render:e=>e?r.createElement(E,null,e):r.createElement(E,{type:"danger"},"w/o"),width:200},{title:"Separated",dataIndex:"separated",key:"separated",render:e=>r.createElement("audio",{controls:!0,src:e},r.createElement("source",{type:"audio/wav"})),width:200}],f=[{key:"30",mixture:"wav/00030_mixture.wav",enrollText:"Extract the speaker who is saying 'the mixture the affected parts' from this audio?",separated:"wav/00030_attr.wav",groundTruth:"wav/00030_target.wav"},{key:"30",mixture:"wav/00030_mixture.wav",enrollAudio:"wav/00030_enroll.wav",separated:"wav/00030_voiceprint.wav",groundTruth:"wav/00030_target.wav"},{key:"30",mixture:"wav/00030_mixture.wav",enrollAudio:"wav/00030_enroll.wav",enrollText:"Please note that the person speaking 'the mixture the affected parts' in the mixed audio should be extracted.",separated:"wav/00030_live.wav",groundTruth:"wav/00030_target.wav"},{key:"30",mixture:"wav/00030_mixture.wav",enrollAudio:"wav/00030_enroll.wav",enrollText:r.createElement(r.Fragment,null,"I ",r.createElement(E,{mark:!0},"don't want to")," the given voice of in this audio."),separated:"wav/00030_control.wav"},{key:"73",mixture:"wav/00073_mixture.wav",enrollText:"I need 'it was plain that only the ponies could go by it' spotted from this audio.",separated:"wav/00073_attr.wav",groundTruth:"wav/00073_target.wav"},{key:"73",mixture:"wav/00073_mixture.wav",enrollAudio:"wav/00073_enroll.wav",separated:"wav/00073_voiceprint.wav",groundTruth:"wav/00073_target.wav"},{key:"73",mixture:"wav/00073_mixture.wav",enrollAudio:"wav/00073_enroll.wav",enrollText:"Please extract 'it was plain that only the ponies could go by it' in the mixed audio.",separated:"wav/00073_live.wav",groundTruth:"wav/00073_target.wav"},{key:"73",mixture:"wav/00073_mixture.wav",enrollAudio:"wav/00073_enroll.wav",enrollText:r.createElement(r.Fragment,null,"Is it possible to ",r.createElement(E,{mark:!0},"erase")," the given voice from this audio?"),separated:"wav/00073_control.wav"}],T=[{key:"42",mixture:"wav/00042_mixture.wav",enrollText:"Could you support me in identifying and extracting the voice of male from this audio?",separated:"wav/00042_attr.wav",groundTruth:"wav/00042_target.wav"},{key:"42",mixture:"wav/00042_mixture.wav",enrollAudio:"wav/00042_enroll.wav",separated:"wav/00042_voiceprint.wav",groundTruth:"wav/00042_target.wav"},{key:"42",mixture:"wav/00042_mixture.wav",enrollAudio:"wav/00042_enroll.wav",enrollText:"The male voice in the mixed audio should be extracted.",separated:"wav/00042_live.wav",groundTruth:"wav/00042_target.wav"},{key:"42",mixture:"wav/00042_mixture.wav",enrollAudio:"wav/00042_enroll.wav",enrollText:r.createElement(r.Fragment,null,"Can you ",r.createElement(E,{mark:!0},"remove")," the specified voice from this audio?"),separated:"wav/00042_control.wav"},{key:"87",mixture:"wav/00087_mixture.wav",enrollText:"Can you extract the specific voice of male from this audio?",separated:"wav/00087_attr.wav",groundTruth:"wav/00087_target.wav"},{key:"87",mixture:"wav/00087_mixture.wav",enrollAudio:"wav/00087_enroll.wav",separated:"wav/00087_voiceprint.wav",groundTruth:"wav/00087_target.wav"},{key:"87",mixture:"wav/00087_mixture.wav",enrollAudio:"wav/00087_enroll.wav",enrollText:"The extracted speaker should be a man.",separated:"wav/00087_live.wav",groundTruth:"wav/00087_target.wav"},{key:"87",mixture:"wav/00087_mixture.wav",enrollAudio:"wav/00087_enroll.wav",enrollText:r.createElement(r.Fragment,null,"Please ",r.createElement(E,{mark:!0},"remove")," the specified voice from this audio."),separated:"wav/00087_control.wav"}],k=[{key:"47",mixture:"wav/00047_mixture.wav",enrollText:"Is it possible to isolate the Spanish voice in this speech mix?",separated:"wav/00047_attr.wav",groundTruth:"wav/00047_target.wav"},{key:"47",mixture:"wav/00047_mixture.wav",enrollAudio:"wav/00047_enroll.wav",separated:"wav/00047_voiceprint.wav",groundTruth:"wav/00047_target.wav"},{key:"47",mixture:"wav/00047_mixture.wav",enrollAudio:"wav/00047_enroll.wav",enrollText:"Please extract the Spanish voice in the mixed audio.",separated:"wav/00047_live.wav",groundTruth:"wav/00047_target.wav"},{key:"47",mixture:"wav/00047_mixture.wav",enrollAudio:"wav/00047_enroll.wav",enrollText:r.createElement(r.Fragment,null,r.createElement(E,{mark:!0},"Eliminate")," the given voice from this audio."),separated:"wav/00047_control.wav"},{key:"90",mixture:"wav/00090_mixture.wav",enrollText:"Would you be able to assist me in isolating the English voice from this mixture speech?",separated:"wav/00090_attr.wav",groundTruth:"wav/00090_target.wav"},{key:"90",mixture:"wav/00090_mixture.wav",enrollAudio:"wav/00090_enroll.wav",separated:"wav/00090_voiceprint.wav",groundTruth:"wav/00090_target.wav"},{key:"90",mixture:"wav/00090_mixture.wav",enrollAudio:"wav/00090_enroll.wav",enrollText:"Please extract the English voice in the mixed audio.",separated:"wav/00090_live.wav",groundTruth:"wav/00090_target.wav"},{key:"90",mixture:"wav/00090_mixture.wav",enrollAudio:"wav/00090_enroll.wav",enrollText:r.createElement(r.Fragment,null,"Please ",r.createElement(E,{mark:!0},"remove")," the specified voice from this audio."),separated:"wav/00090_control.wav"}],b=[{key:"160",mixture:"wav/00160_mixture.wav",enrollText:"Help me extract the speech signal of the loudest speaker.",separated:"wav/00160_attr.wav",groundTruth:"wav/00160_target.wav"},{key:"160",mixture:"wav/00160_mixture.wav",enrollAudio:"wav/00160_enroll.wav",separated:"wav/00160_voiceprint.wav",groundTruth:"wav/00160_target.wav"},{key:"160",mixture:"wav/00160_mixture.wav",enrollAudio:"wav/00160_enroll.wav",enrollText:"Notice that the loudest sound in the mixed audio should be extracted.",separated:"wav/00160_live.wav",groundTruth:"wav/00160_target.wav"},{key:"160",mixture:"wav/00160_mixture.wav",enrollAudio:"wav/00160_enroll.wav",enrollText:r.createElement(r.Fragment,null,r.createElement(E,{mark:!0},"Remove")," the given voice from the mixtrue."),separated:"wav/00160_control.wav"},{key:"240",mixture:"wav/00240_mixture.wav",enrollText:"Help me retrieve the speech signal corresponding to far away from the microphone.",separated:"wav/00240_attr.wav",groundTruth:"wav/00240_target.wav"},{key:"240",mixture:"wav/00240_mixture.wav",enrollAudio:"wav/00240_enroll.wav",separated:"wav/00240_voiceprint.wav",groundTruth:"wav/00240_target.wav"},{key:"240",mixture:"wav/00240_mixture.wav",enrollAudio:"wav/00240_enroll.wav",enrollText:"The speaker is far away from the microphone, and the reverberat is very serious.",separated:"wav/00240_live.wav",groundTruth:"wav/00240_target.wav"},{key:"240",mixture:"wav/00240_mixture.wav",enrollAudio:"wav/00240_enroll.wav",enrollText:r.createElement(r.Fragment,null,r.createElement(E,{mark:!0},"Eliminate")," the registered voice from this audio."),separated:"wav/00240_control.wav"}];function Z(){return r.createElement(r.Fragment,null,r.createElement(c.Z,{justify:"center"},r.createElement(_,{level:2},"Abstract")),r.createElement(c.Z,{justify:"center"},r.createElement(m.Z,{span:12},r.createElement(s.default,null,r.createElement(g,null,"Humans possess an extraordinary ability to selectively focus on the sound source of interest amidst complex acoustic environments, commonly referred to as cocktail party scenarios. In an attempt to replicate this remarkable auditory attention capability in machines, target speaker extraction (TSE) models have been developed. However, the effectiveness of these models is hindered in real-world scenarios due to the potential variation or even absence of pre-registered cues. To address this limitation, this study investigates the integration of natural language to enhance the flexibility and controllability of existing TSE models. ",r.createElement(E,{strong:!0,mark:!0}," Specifically, we leverage a large language model (LLM) to extract useful semantic cues from the user's typed text input, which can complement the pre-registered cues or work independently to control the TSE process."),"Our experimental results demonstrate competitive performance when only text-based cues are presented, and a new state-of-the-art is set when combined with pre-registered acoustic cues. To the best of our knowledge, this is the first work that has successfully incorporated text-based cues to guide target speaker extraction, which can be a cornerstone for cocktail party problem research.")))),r.createElement(u.Z,null),r.createElement(c.Z,{justify:"center"},r.createElement(m.Z,{span:10},r.createElement(o.default,{cover:r.createElement(h.Z,{src:d})},r.createElement(x,{description:"Comparison between the conventional TSE system and our proposed LLM-TSE system. The conventional systems rely on the pre-registered voiceprint of the target speaker as an extraction cue, while our system offers the flexibility to incorporate text-based cues to facilitate the target speaker extraction process."})))),r.createElement(c.Z,{justify:"center"},r.createElement(m.Z,{span:10},r.createElement(o.default,{cover:r.createElement(h.Z,{src:w})},r.createElement(x,{description:"New application scenarios enabled by the proposed LLM-TSE."})))),r.createElement(c.Z,{justify:"center"},r.createElement(m.Z,{span:10},r.createElement(o.default,{cover:r.createElement(h.Z,{src:p})},r.createElement(x,{description:"Overview of the proposed LLM-TSE model architecture."})))),r.createElement(u.Z,null),r.createElement(u.Z,null),r.createElement(c.Z,{justify:"center"},r.createElement(_,{level:2},"Demo")),r.createElement(u.Z,null,"Transcription Snippets"),r.createElement(v.Z,{className:i.table,dataSource:f,columns:y,size:"middle",pagination:!1}),r.createElement(u.Z,null,"Loudness or Far/Near"),r.createElement(v.Z,{className:i.table,dataSource:b,columns:y,size:"middle",pagination:!1}),r.createElement(u.Z,null,"Gender"),r.createElement(v.Z,{className:i.table,dataSource:T,columns:y,size:"middle",pagination:!1}),r.createElement(u.Z,null,"Language"),r.createElement(v.Z,{className:i.table,dataSource:k,columns:y,size:"middle",pagination:!1}))}var A=a(8610);const S={banner:"banner_d9gt",title:"title_GqtP",links:"links_ykh6"};var N=a(9354),P=a(1210);const{Title:C,Text:L}=s.default;function F(){const{siteConfig:e}=(0,l.Z)();return r.createElement(s.default,{className:S.banner},r.createElement(C,{level:2,className:S.title},e.title),r.createElement(C,{level:3,className:S.title},"Xiang Hao",r.createElement("sup",null,"1,2"),", Jibin Wu",r.createElement("sup",null,"1,*"),", Jianwei Yu",r.createElement("sup",null,"2"),", Chenglin Xu",r.createElement("sup",null,"1"),", and Kay Chen Tan",r.createElement("sup",null,"1")),r.createElement(C,{level:5,className:S.title},r.createElement("sup",null,"1"),"The Hong Kong Polytechnic University, ",r.createElement("sup",null,"2"),"Tencent AI Lab"),r.createElement(u.Z,null),r.createElement(c.Z,{justify:"center",align:"middle",className:S.links},r.createElement(A.ZP,{type:"default",icon:r.createElement(N.Z,null)},"Paper"),r.createElement(u.Z,{type:"vertical"}),r.createElement(A.ZP,{type:"default",icon:r.createElement(P.Z,null)},"Github")))}function I(){const{siteConfig:e}=(0,l.Z)();return r.createElement(n.Z,{title:`${e.projectName}`,description:"Description will go into a meta tag in <head />"},r.createElement(F,null),r.createElement(u.Z,null),r.createElement(Z,null))}}}]);