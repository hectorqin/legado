import{a1 as Ne,n as A,o as f,d as m,g as e,t as R,F as $,N as re,u as n,a8 as J,z as y,a9 as ze,S as xe,v as D,e as L,w as K,a2 as He,A as Ae,aa as Je,f as Z,L as le,ab as We,x as qe,ac as Ve,p as Be,i as ke,s as _e,Q as Fe,ad as ce,ae as Te,V as Ge,J as ye,af as Ze,k as O,ag as Ye,a6 as Xe,c as je,a7 as $e}from"./vendor-16414864.js";import{i as et,g as De,l as tt}from"./el-loading-3948deb5.js";import{_ as ee,u as de,A as Ie}from"./index-4dafd329.js";const ot={class:"title",wordCount:"0"},nt=["wordCount"],st=["src"],at=["innerHTML"],it={__name:"ChapterContent",props:{contents:{type:Array,required:!0},title:{type:String,required:!0},spacing:{type:Object,required:!0},fontFamily:{type:String,required:!0},fontSize:{type:String,required:!0}},setup(s){const o=s;Ne(d=>({f550acea:o.spacing.letter,"1db54a99":o.spacing.line,"5bcd0de9":o.spacing.paragraph}));const g=d=>{const k=/<img[^>]*src="([^"]*(?:"[^>]+\})?)"[^>]*>/,r=d.match(k)[1];return et(r)?De(r):r},C=d=>{d.target.src=De(d.target.src)},i=d=>{const k=/<img[^>]*src="[^"]*(?:"[^>]+\})?"[^>]*>/g,r=" ";return d.replaceAll(k,r).length},U=A(()=>Array.from(o.contents,d=>i(d)));return(d,k)=>(f(),m($,null,[e("div",ot,R(s.title),1),(f(!0),m($,null,re(s.contents,(r,h)=>(f(),m("div",{key:h,wordCount:n(U)[h]},[/^\s*<img[^>]*src[^>]+>$/.test(r)?(f(),m("img",{key:0,class:"full",src:g(r),onErrorOnce:C,loading:"lazy"},null,40,st)):(f(),m("p",{key:1,style:J({fontFamily:s.fontFamily,fontSize:s.fontSize}),innerHTML:r},null,12,at))],8,nt))),128))],64))}},lt=ee(it,[["__scopeId","data-v-a0211daf"]]);const ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==",At="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEX6+fP8+/X+/ff///kbczPAAAACeElEQVQozxXHQUgUUQAG4P8936yzs6VvZNZmN9QxVxiF9OLBoOjtOC6rQq6ygXjI2fCQBdXBg4egtzFGdqkoI+zgBFbqkm3hQSxhFYLotOcubeKhOnVYoqQy+m4f5g5TvpX0xHLbLY9j8SMhJp+Jk4LfAUS2kVRIjILmnwGBTX42PhCVlDJQkIiy2nWAvaJ1h+oFIpJ0hMSYVbyyrgDWshcMpMyL1brPDQKWmduO+KTJ6XeXAMK9Yc3FpD7atyNwg6kt5XgFpLPhjUTFSYVn2abDiugGShwD8JTVRJVo/2ecuKtRb/qc4BK+9TboFfokog4T2Fn6Oqdnsjk90NMS76Rji6E0NmwkPBAZ4Xbkw8KoDAkAbEhkc78e9omxxgxg6qa5HvMv+UZbCV0qmHnSHKl5TxeA2XTCGWekR581mwC5crBH81PznASqB9va3TbkYAjJPLfg5uBfXaJgIgIBv9eessRIhxe7PA7kj6uUMeMaQ/OEQOYRaaHlqH2Gxwsl6E/pwVY5FH7uCypBZPKvDQyVziYBrAkMURe2MOOOxG/eQpp5PF+bFzUV5HtPj9GeiVSNZDELleifYTp9NAjsoiXg4cW+4ZORkdSMB/B74aAdjhsVakhgkugsbmqcDSLEoWp8zRjrux3tli6Q5uM3E+maT99Wy0RiP7tboiuRZle2c6CYeL2kcUc1KvPtQKucogMadKVTQOJYCeyCYlhQQ/Q7Etfd/vBygy9iqy+LyHeF46saCYvW6ingsbA9RBWtdi8GgUXW+oQx9/wP6bAAX1TWeV+CbShZDlQ9xT6SoSxZmKRAkmXb60kzEzkRF+Ccb94BGspGJoN/UzmyR4wjXHAAAAAASUVORK5CYII=",dt="data:image/png;base64,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",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEXx58b168ny6Mjz6sn06sf27Mvw5sTz6cbw5cLy58T37svv47/168v37s7t4Ltrv0//AAAEjUlEQVQ4yw2Ty2sTURxGf3dmOqmPxb0zmaStCnfmZpL6gpmbxIpUSMZGrSJkxsZiVZimNVaqMklrUnWTRq2KIDFWWx+IFrIRFxXEB4KIgqu6EBdu7M6FIPg32PW3+DhwDmBaYrK56KP4HGIsvg/uvOV0wK+qgBMlO9BujuH4DSJlOseqV5a/BEF97gt0ChyIPqBhXI9BtqtIB8vJB/LdCQ3OVjaLNX0g7+OmoI4e7nkemAqX6o8vg0yyQAyQS7IfgvFbI+6QyI3R4KELxw7kwM2ooQfyQigYnwY5MZbMlHI1DvnQVCoVcrt+R+bO7vPDif3ybNajwqAAe443dpfDsPt379VMWZzGRuqM79mQF+DUz9nt74bQ8J/O80MtVR51U02JKKmTCvTzLVf+vuxP/aHnPo9+2bW+zVsJ0Y630/CrfzX+b+UL+7O68Rczv+7lrMh5etfKXvhc2rk6KforxuoO2xB2tcxKfeXHt18rHOiHI/0RRjW/YGRDkHiwo3nzqL60o58C/bgRuaj7vk+QOwOhpnFNdjuWpKMCGP8Yapu9Ty5FTHKQLGSEFikjd9ADwP9ciaNNjc5qMH6w50AF/LKOsOYqsOG9GjKgc7ZXolqntm6fysJ6Ma6ll2CiqmOgE6O7x1wXExklbeqMYcwsmJmOoigt8SBg2WfilDSsAZJcBxDcrqtBXzFQJqZNHfscyIhoZlygAtyYAceah+elrFbI+46gEHDGiW878Kj7JpWyfhg6iyRMymV1MKBSeVpfgLHIohyTojI6sRyK1VpcqzVZeEBLOnA9unhGKUXPJDYtV9Dxuz4iA5xSkSWhCJdAiJR9PHlvfvbntbrR14FDqUNRAYDJmSnv3oKxuz5+7fiblgVJyYLTbgUM05P7LESkoXvyWNfb0aUU6FZizgQIa25VqKQZqFrk6v6BsqqIHlQmkQ9KrBhkC20/DrFsAFEEYLjM+lj2wYHXCwnNvZQR42XJ2iVK+UBXnI+OBE6oXpUUHiQ1yg0MhA03iwGbnOdQYc1CMiPIPQrCQJFH4L4BMFktAtKd9PN5gnU2Gra4KuK+V+mjtBRpAGIqDVe4wnSnajiFGO5d7smvhVQEMEYwqshrENIEaY7YeblJYtsb3QhAHWZCEKK67swwPMKw0If1Ta+6DgHmlgPzcUTSbi3rrv1Y64/BYEMPQ5SDHUOR022B4QRF6xLUPAaPX/V4IDI5N2BMwx4LqO1uO4j6uW7NvM7lATqGAxY/ZHVgoGZbu7SvkNR75x6qGSB23FdouENVwN7sCbewTdsXGrrnQ5ZZKOCOFtMTIzxlPu6eYmtL+nMFmoK7OeXajn86r9sqWbfmvHC4IagE5qfCPGZvLSq5F55hHIxJFa4/vRxHBlz0og4TojU1l/MOHJX17lybdF0mQhFO44JYUNt3UA473IXw/iPfDWtKG5oFSXIF5iU/VnyDSjxxeDk3jAXRyVyGTNB9FxH9qcFDNJpVbt2y9LytUXkK7Py6+z1RezHQqnoY8XcLimmd8dCnBhQCuaGpJCq3SoIlmYvLz8UkWhJw7T8k+Db/DYEKwgAAAABJRU5ErkJggg==",gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX48dr48Nf58tv379X17NJtIBxUAAACFUlEQVQ4y1XRUZakMAgF0Af2AiDWApDZgHZqAV1nZv9rGh7Rj7Y8McUFEg1wvcMESMNVD/neU8Xcaz7nYYkYlYO6Ti82PBI4BvIEg1aj3wKwRvIMgZsUy5LdhCawPFh1sZs4SrlyN9fQKpv8s5dgZ2eLyqqJiu+WkCmUEybXkm3INS01WAiv0PapJ0CZc0SJQUzcWnZYbOOY20iFD8Bk+/j2A3wNxH7GdShFYS5ff237kXh9I9zSkQmIAhOsOSVfJ6DIXTMDaPnzkRJ92S1BQQmXl5LdirgRLLDdcYqcGPwe3QN4xCBiGNbrqq9wpW1XCecChwaQdVOsRDpPCpeoolPdxeXp3WNB9PHVzWBHlygy4NJCCrFHREv6bDt0VGwJZASkpONmm1UseGeFKAQexgaAkrfYWl3AGxWOLL2AIMBNbCXpktmS3k3vHeYjGCPBa43wJTurO3ZFVpQSJdAZGLoHTyk1upkjxMEaIxum3iIARcCa5kSkFAW5fi1mUlL9eyOsaanFmOMruwvEdE3ZYzsRSzo5ewRLXyVPPEvknt8ij4DvCg2O7xOgBCUprEzV4z1WekSpUgI8DT2mrnSOXKRfQavwuKA1F+tFnMKdJSUpMA7wQAifWRkMgjUKKZE4lBl6MCM4B1pq1P4uIjDE6Pq6rL0FnW1nIFmta5vrSvq/Ch4tpqG/ZNyyWa5jZPktq81eYv8Bt5s4iFITOp4AAAAASUVORK5CYII=",pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXN383Q4tDP4c/R5NEInCCXAAACVElEQVQozw3Hv2sTYRwH4M/79pJ7bZL2bXqtERJ97zjUpbZDhg6pfC8qibi8hLR0EaJ0EFxaCSWDxjfpj1zrYBcRBKE6SAfBJWsx9i8IQfdQxDlKtA6t2OnhQfN3lbG7ytYRywF8rVoPCNO0X2sQOKDpAnSDK2VwkHgmh5yLGT8qASt+2KofnNt2Xg1gf1UF8AoM6052cRMNaloLZb7RKQGrKKji2OefsZF+VqIvos5ZLVIZCX61JcwUdk56wASVkgQvzPfvmT2twTSwyYaC/Pl/UhAHorFhBgZtL6XdAZRp1tkPwC1NLa9CWs5prLhI85NBQsLdXvjDymG3/EbYfQhVNYqc3TtktQhWLY3ko0QsdMbSEp+64v0NfxyqLbIGdh6M2xHHlLBGqKTyQo4E/nebBgBfe1GpdeywYXc8CT7D3cKXuMXkBy4xN6o5OuKamYp3DVI6uccO9lxgd2CAlJgI2BGgaAgIJV/TYwKqu3WFccjbMuA+bVkWgS2bfnlRbD1Eb1sDyWMmjKYIBgGAWbqKRicfvzBkBIz3V5AKnguWdglQEysQsSuVzOg6ALy1pitA5ykGCsc857BRYcgCSZyFOdvoOigSGoPc5Ta73mgxshIcQE5sHMHd9D7yqITw7JO+GHVMxjhzYLcKPSEgmz3fU+BRy3iYNtiXLaBssCW8KguReqkQOTb3MStV0Ugt4U1eIs1RZWRII6Ww8xeNNItyGGQI4ZMlpg/3lQtkl2JFnBp1imRyFe0kK2Id3PCslMgiQNMS77gvFeDhG3cSkYvheeg/e7ClIh5oh+IAAAAASUVORK5CYII=",ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7eHl8eXj7+Pn8+eTbH1KAAACPElEQVQozxWPQWrbQABF/0xn3JFKQRTZOIuUsbCCbOgdRoYEOauxkYPcTRyTlPQWIxEltrsRwQ6hK9nEQek6F+gNTE/Q3qLLusv34cN7SH3mFicdYW4gNIhJWXPBRVXzjcFD0IqeU4o4PRbAIVjyico0vJpIifqPfL80QN9DAQY5ucRHE/hpHxBldXe9GilaHKcKMlj6pho2zXgkNdBl0oJ8kiF1DSiJF1ZHBJkQr0Dbux/5I42Zp4cFahJDFGeW6/QjBwmFY/Q7vZ2SnoOdW2parv/Cnm81+m0xrEfiVXQ3W4nOXIqVYi3l6AAQBwMFkViVBANMto4enXHPNTkHBB0oVj4r5vHzCWayrgBvxtygDlDB2CNDjd80ZInY69aKVYZcfJ8DW+fWuc+syEODALx+ojqoafHsthTI+ZW27PGpIeo/cR6YKcbqIuIFhHmBrzAovzIOOJk1ucvcDzrMRYGVBH2yvcAOf0KiKwfRovBI3tm/kW1eemtfNWwIIXE2mJNhvoszfmMBfRCv0OPwd2321uDW3nx2q/BDxFVeoN1g7a6Im8yRnoawa8kbdXnU0cHeTMxKfZGlJgvLb3sKsxgglQnDdAfvj9LUnqWRDo0GiUmPwyU7TAsD7wHeIW3Nfy1qVGKoE9NgJCdYCAexNRob9yCn4DAQmXtQuUtera6bEmTTXhZy6h856xi4mnEl6BI9mfISkLbtJyZIMJIAUd5ZOBEu88KRAk71yxfItj/hpIB0Errv4gO1os4/UICf+o3kkqwAAAAASUVORK5CYII=",ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX0/PTx+fH2/vbz+/P4//htSO9OAAAC5UlEQVQ4yyWT0QGjMAxDZTsDWKQDmJQBYrgBUsr+M517x0+LRWw9CyA+pC1YzndrMgHaNXVKQ+di13Of1qbur48nWhuRjj8i6ON8e7pNm7zyag/DBTfS9Z4Hup1fUuXMKY4HEE8QOHCByXkIkl7lDT239RtL9quO4JItmmhOAHXg45QuYKrQFLyGJcRvaTw6kQqZy6mkR6JAPFH/XqsQjEDRmUOA+MNLHGyMUT7AHApoAhjgjIJmCxy6XHdf648AWCdGe57IUDazCeTImQOY4/z+eVYVX2IjOw9RydeAeJwl79iGi4HpgQgHEchWraUZLtayu8scq0lHHHUKMY3Ml8hB7CS1jOckDLG9ccgNeX3124phOcjL9fPnWJhTXpLHeG9DRmHnTxHEaHakS2J51lwAJcUraNbuU7q4gMTDQj3Eripc/x+qFM5VEKAB1roQfAkX5/PxqnS2QpOrxfK1Zft0/omV5T+xCSBUAIbEIwUQgvAfxFE1O8dnk233+1UZiqJ1mAbsue6Yt8tF+yOrxC/YrUhzC4qPlE3EbR5hGKhhHdlrg7J9WunV7L7BcYQwAeE59u2tnN1c6gfVYrQiLSZ9OxZdWDXQq0+r0Pbarh3UqGCwauVvbiXuDsNxCtLDdW9rTF8oQYN4EoXXdfmwNguQP26n/tRjDeo+F2W7PjWtfSr6Bn/z+cXOLp4NnMV4RytvSW4B68m+XN9XfZTFGhO/S+cHTuTqZDC21ccA0N7QsePALaDQC3D1f94U9CWo+aq6BjB3v0rxIimBM12296M3aKPHjXLQE9KQKH4By8RHraJ3AgVto2r4xdFqlaPaiAHLl1ZF4P2pI6cYc+K8UZdcmxy7lqGc1IoPxLmIFuIeEZ6j2sQT88muEg1zwrEDTIX5U/ZmcsqfgVlBumiBLF4sAyhf9BFlXOPKLZ4H0iFb3VoHrGhtHTldKrOvP2/reu2zfV8CXMPqzRdlgd0a5eI7WwB/AYcgavcqxXWEAAAAAElFTkSuQmCC",vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXM2t7O3ODQ3uLR4OTDp25yAAACdUlEQVQozw3P70sTcQDH8c/3/M7NG+j35mnHwjwh4hRy/QFK3zvPNbeIG1koPZmxfj2IDAwihL53zj0JYisfmEHcZJZOiBUG60lZiI8T/ANusuftgQ+kCPIPeMP7hS5mUrV9c1g6MQCAEZ8tDLHwofImAGRlX+SZK3Vu9rRRPuO4PK6/9nA4GIATsxlODS+rdCMhkAZivpYV0LWoQHSLSA4NfUg+6mY+7BKL2++F9LvnrBDYm6JO9i/YO3i/HJTGQ4pdIV82TbEDFG6vGYCd4wZchgK5J2CrKTLE+Tx0v+YGlIbdWJFcQl4ptBN8fUJQN1MCJLcZLYwUVVo+famGGty8EXJF5ofOEDzcodT3/Fb0I5sHmc1ZG7CcSl8COgxlXx09jT05OafjCZLIHJhGIaU6wDZHsuMQ41wbdjmQXbhKnMq1zlXSYrjCnyZblqexA7fC8RxS74tq2P3OxSQwTuJSApH8OZLzBBp1pOe0i3rdyDUA47GySZ31YmC4EQYSXvFSvieORGBxXF9aeVtUWKGS9WMC4Z9Y2uXnJ2nCUXVMbPOYqNYNmGWWQ7Evr+BWC+a0JAMTImcq/S4Z5INdQMeuOqDIMa9beilxfA60iC6sP1INcPDpmHBW8drZHNmqwyddJtVje9q8WGUgWAOzmbU4FCQBFi8B2Wk6pickBnYhJMenmJGuRmtt2IoKq9NuFGbNFR99sHnvrnLsLysKANDIsxbp6RNMAsoDSKuRpMwZbAAzI68QatIjmZ0aImyM3O8/4e2MNlOHZomFsa/fLDsysliHS+nlYLQJMnynxrH8QO4PaAV2Li8B/+52UgeGIVNFYf8B1XG/kFSmLcUAAAAASUVORK5CYII=",mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7vLf7PDj8PTm8/ecW+lZAAACZElEQVQozw2RsU8TUQCHfz3fw7MS87jeI7DdmSMpDEoHE+P0HqGkvRR8vb5XC4NpN2RQZqcK9xJkwtriekcggerC4OZADDiT+A+goxv/gfwB3zd8H/T6vYF/pTZkCSmDNd3CBEtmZJP4N+CvvhecDvmntKsvwB17rpbIRTLOEoYkj9KZzRUuJsuBQFwgptyJ3Y7EL4V+ud5LO1UnMeQSSObqisiISZkbQBlliP3qWSk3GPQXjxv6VF2BTDO4ySx1zhuJXbA2wBNJF4t5vH9keg6wu5NvUpLtXrZ3OHC9ZsgVcZdOl38PM1y/L6m8GRiErj4AqezUjHGatGGIgs5NJDHh8Ua1IuB4035haVT6SaYWMoQ0eJ3rB/Gpnr3fB49YAy1Wa21YKqAHOmAveVw6CCMGMZh5bGtVI7jnZaiQNbta1Z+285oSoKoRbta1KZ/1bBdKH/RIxv2pRVpkoCmvpr097RWoo0CpMlTWllIenSjECU8mV43mHx2fIRfH/pncrJm3+58BWdbSqCS07/yiQnvHiCG4ZPGRFeAtfreoOubyctzHvLNHhjNvIhukxQzjU5O6QdOEzUp1Ef4d98Pxz+IPYX0bcpnT52dbedfz8y7C4R89RV+MjJkuCCx7mWDt4eyK/62lQB55xXGJK7p8u6bgRv4hVHylelYGGFs64W94tng8sAIVqSRJBpqRA9rFvAysS+9ak8s7557pz5HR4qhCRmWgplpTRJ+bhYfSAMO8/YBucWPuSdmFFtOnuWqvV2NbF6CJnbhNDzEZ/T0XSDrUydzkZCG1z/oIEyUFYxW/KPXNfwopuHDcO04UAAAAAElFTkSuQmCC",Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXm9PXq+Pno9vfs+vttWKBGAAACPElEQVQozw3RQWrbQACF4TfCMjPqZgIj4RRaxsZKE0PuMBZ2cLKaCI9RDAXFmJJknUWWI1O1UlamOMHJSjGkuFn3AD2Cr9CepDrAg+/xIxK4QwIqHHQkUhQ/WuphInVIFBojl8QXc012Tgq4RTtVHWVLZVFh1tEoI91uiN4joCqde8Ukn/zGM1B2W4ari2PtTwyw55Ld+Wways54qhGPyS6FzbIT3lIY8WwWdCq56Yolx6KmSKzoqrsCB5heAp4TGNQWJ1Pc6XlE5jQD5OlIX9I47A9uiUQcPQxcury/ToyxWJG/za6ki88crxKPocKS59Sl3EtBG7C89fCGflpfqoSzCeC4crioJA7F0V5+8MaSIk4qSCdwzpogmbqzEirVpGiS2dOVJvUuuqFEmhHao06KEpq+8lvHI14NJk3Qrmi9vBuRLwAz0qZB4hsDXQFXgtnlpDX3C6ug9BquSw/CYtwAzuTz5vuQNdr/YibhR68378ehZH30FSpjh71LpQkrsj+Q062h5WwZ5wlRoD6uQJy1DqvSYuCUapMBqT5YA4ZFw4KlWapxoUGlKWrx0eDQvmigu4WMYt97ruru98fYL8/0lG6CTOFcFWBhFK5gKw19h2JN808nh7xhkU6sWKLXdtkqBL6h+lULK5k19wFB/FldnGYf3LDeuf6IC2/MzJOSOP0qPxLqzaGIqtBcFIItrstkazONOkrc1D1czjuwEGESB4JJnjgSMN7PXAu7fZQpl1C236C+9mM4Af8P98Ch4R2TRl8AAAAASUVORK5CYII=",bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXPz8/R0dHT09PU1NToNyAhAAACdElEQVQozw3NP0xTQQDH8d9d7sFrG+QeKVgQ4aoFCwFkYERyLY//0UB8GNGg1WAC0RBGJrzW4mCXQmpgvCYOwEAYiulSpYtza2KiW7s5FgNJFSV2/CzfL7RwpoJ20iadmgA8owOyaxmusKE44scBeb4vIv00dqYgmf6jzWcr7W6INbDQeZbQL9ytXeYgtFfzmW1Fek5msxJlwhyt6qDDxOLQzpVPompYrMPnEnhvLm7M5BxY5nowAj3zkydAkpC0FIG6g7AK+Ub25ybyNWVYwtpseP2rfrQwiGRpfqrnMuPeuvr2dA0p2YsHF2XghkrXKtZ8tLBjR7S2qIaYbKmyLd/QP+EogLjqqwNw5Lq1pDlMLkM5+gNoSvdq+Pxmz9/61EFq6GYM6GqaGvlN95zy3gsmEWI8K3k8OP9OmRLEPO6DP3Wv3g42COinJTZ33dcIvs4ESp6opMTjDs6mcYTEbFeUifuxh989yZrIx4lkpuixxz0nHLCekKbE17suKhYkMGhoYhTZtVBvg4bfq/1L1Im0AGMVpBFwumM0zwyuKiCMi5dqR4Flx47AGyF2xTbxqUdTwCH94BT3DozpLV5WuAL/N8rGtHKjotBOOuOtCJ9E21uqsyBoLOzaXbHPrK5PQBP+fBfeidvJAeMIAmzVt5IkJJ9DBWaZDAepYUhlQqHt0h72SJ3j8TZHom64f516xx9T5evgMPgwG82jZdJaJIDyWp6LAjOCclVyzNA3iTKzIULlBQEPaTXlPHok5gISclmyaWZlqY2aTHdRHpJOwTdDEQ3ZfKtbpclcNhyVClagmY+fIfyKukntPqBgnx5QvZHk/D/MK8JMClrSigAAAABJRU5ErkJggg==",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXe3t7a2trc3Nzg4OCXP9lCAAACoklEQVQozwXBzU/TYBwA4N+QEr4CNbSFwcFuowSqMRvEAwShHWAYNsu7dS0dLnGUSWT4kZB4lGzE4VtcwgIDJqcOWLJxcv4BOoQZuCPxSNSD4WSWLJGL8XmAIiyo2RgJ4A1pxQQlOxRAszLTdnPu2oQGb05RC5slJld7ZAIfo4O44Bn1ud59F0BcjnYOa17Jhwc6EdiKettncsXjT1f8KUBZUW41pK0Jc1Az4dEV3rkkPBtDSZ83Blyt0kSf2PRjzIykoBwINisPbPPtljdVE9iAXRfUPkXLVIgYrCccp5g687NdZbcJ+xa5VE/HhTtT23IKsN5jj/pcUd0dTZNAqCVw72n4gOwnTOC0vvHfaauT8d9zAoRRfPpISZRVyUiw8ELzOG1b2DZpFzkSrHLhq52twDEdyZHwvp2j4uv/bjvOf23/AcEtTuJbY5Cp4YcAer1IGkUzOo2rn8LQOKjFJw3NTw24nprQXY5aF4wxcqcSdbFQ00H4xFl8Drx4X4CikvAM1tuR8bKIBCBoLnKN10KJG4zKAsc7c9WEB9gnCi6BhVjqoco6t20ILAJuVctvaEZK732cRHDRmGfuihOam0o2CHByUZ/epCcVlRs2wmCnMqsd6aSim3ibBJtm1LGyXW3Bb7tJCPlFtUG+SvPdeEUAB60lNdo+VQbLcwRNVtT68FsLcr1+NotgNihlpExS1V2SFgNbeC8bEhgm8sM17wSi6Us2gxVWJU/5GKBpandvfyYbU1yHCLpCgWGbbPXn40rehEsUXKIJr9DMKgICfjc4bl1YfvUhE/YIECGRqjCxSM9hrybAIkND5OeWfFZsXkxB+qDzb7pUQ3EfQ3Ml6EChEt3D+iS01VqC7EQ/Z/DuPQcz4yChoFQJce2Qr+NNAv0HxofmpXGqgHkAAAAASUVORK5CYII=",It="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEXm5ubo6Ojp6enr6+vt7e1FnZagAAACrklEQVQ4yx1SixUbMQgT3AKAFwDcAfzpBN1/qMrJS5w7bCQhC6IGSUGYQJd6Ox9ZPXi1AGJBavhUTT0JjYPGAab9WcDYIxsmlnxkayX8mhxCmKHA75az5cfRbWybEExiu08xDSgGym0mwuf3j4SvHeQxDJJzh2zp4iOlrD8iOb4SXyC1wiOLRTcnrje+nGamFeXVKWkmzbFIPChkmJ6Fg7mBpV8n+JGOVCd4jv1thThkjeQGNeafpeV3rsEWLfyWc8tC9jOv6FQ8rRzHOOVB+jCYEUAJpDvh8xHNFm/Tm5p5lw94Pp3NhtKEfQsGvnXhowdZE73hPwxKvjDd4i4PCdd0fe3W5fO8ktAsUAacLgstpUw60JCiPLg2XpkgiqPIYYXJd9ksGIT3q+LlevypzItvO+s0F1dBzVr2QDMUkYmuyGcrIS44mVJ7JVKwQXjYuBYp0Uetecbswzsikzu3gUR8bJC/C8Gd/NAzI/xdUGOYQQHDZ8X2d5XuzGRUiXAi9si5CRgoiToRZPtzLJkd0FUHRHZwJf0BHT1sE7gcnh0jmKKlSSF4/GBirGk5+K9NKlGDCfc9JtPhg78JdabH0YQRKNZnJ8tFnPfXHJb4xum1TTCeEmyEdbyEJLjznMLHuFD2Y9NEkSleIBs7SiCbblhgctVi9ch++kDYnn1C9DA5TvdPsToXM55wI6k+8eKT1blwPTqWb5CFJ+7dTBmab+KHy+xwNtItXhZNSpHD2fxnynrxG3ZBKRe8KBpXk11AnadlccEhr9w1nBBvBylNkv7A8eqpGBCDqhitmWQXBjjdS6idr/QjXWLDeMzMbVDoJuM8zN7WenMZWXgZ2vX3F01J3jHZbwk1LRP+DWEvDJtOUoh/AIaBUz5VpWyhuyx4QtgL/NmgC6kM/JvNe+R/C/5aL7BKIbYAAAAASUVORK5CYII=",Bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUQERMODxESFBYWGBkaHB0eICLm6ozJAAACkUlEQVQ4yyWTUdLbMAiEASfvoOkBkBy/O5keIE0v8E/uf5h+68qZWALELgu2MG9PP9qyvCzTVhrrsPGOCjvTfXQZvtp/W3Gy6LCITqs4q/DZ+KYl76zKzHVYpY2wNY27nqN1sbLGcrLH3/ENH4oWlGctsDu8AO+HzTLlsYdh8MzP1m6YDMz0ACfcimvakBj+mwO/+5Uta5teOD379sxK1fUxmUhv8MU3jUT5gs26PMephFznkLcpQZ6/dPL9C/GWHcCxDN6oZhD5xBm5qoYBPA+PFE/H1tXDWcWl8TW7rS+4dUzAVy0BIrvC4/HcqW2TkG1HO8q9dC23INAg7NA4AFRFkDTM2lfELPyFzi1VddcpX2z0KjHBUDmdLNJ6dDps4ytrX+FPsZwE31wSL+6OWfHOAJ3+Y0Rk/MiKfmWNPg7oVP/U3Ck9FoCkC2gBpALOiqbMNTkOe8P4FWkTD2Y9Q3+5VmV0uLUJBl68U5uAK2Kl6QDXvLxbwweOL2sixW78uU8p0ysfc7cWrF1j6B1sPJ4WgclYSnJN1bzozrhEcFHmRzBkbJWqqdG+EYJXRFmT5jnLXPUNF6WBdoFbTxYsmDXVLU/WA7MExNc93sJS5hIXDeLxzMScHzdhKvEkibr6cQXYPrmtmTA7JcInISrTzRDvShTdka0uVGrsJAAR6tSn1sKziZtfKVjAxPrJsYgZO0bye+vKTZ/DgoAoLGNO6jYHimZYTL/3pLJHawquJukjBpfz8WOGVSVIWx9ywUfS5iENutidRM4NzkAmxgUSQ68xgNOU+ZLalr4TS2V+D2xqukZig+Z9DilR7Nouzwp1cp/3E5q6Rdlf08obKvAM4qZ6pMr+w3PmQALSSBfjyZn5DwrNRVbywBQiAAAAAElFTkSuQmCC",kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==",St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==";var X={themes:[{body:"#ede7da url("+ct+") repeat",content:"#ede7da url("+rt+") repeat",popup:"#ede7da url("+At+") repeat"},{body:"#ede7da url("+dt+") repeat",content:"#ede7da url("+ut+") repeat",popup:"#ede7da url("+gt+") repeat"},{body:"#ede7da url("+pt+") repeat",content:"#ede7da url("+ft+") repeat",popup:"#ede7da url("+ht+") repeat"},{body:"#ede7da url("+vt+") repeat",content:"#ede7da url("+mt+") repeat",popup:"#ede7da url("+Ct+") repeat"},{body:"#ebcece repeat",content:"#f5e4e4 repeat",popup:"#faeceb repeat"},{body:"#ede7da url("+bt+") repeat",content:"#ede7da url("+yt+") repeat",popup:"#ede7da url("+It+") repeat"},{body:"#ede7da url("+Bt+") repeat",content:"#ede7da url("+kt+") repeat",popup:"#ede7da url("+St+") repeat"}],fonts:["Microsoft YaHei, PingFangSC-Regular, HelveticaNeue-Light, Helvetica Neue Light, sans-serif","PingFangSC-Regular, -apple-system, Simsun","Kaiti"]};const c=s=>(Be("data-v-7c8b23a7"),s=s(),ke(),s),wt=c(()=>e("div",{class:"settings-title"},"设置",-1)),Et={class:"setting-list"},Ut={class:"theme-list"},Qt=c(()=>e("i",null,"阅读主题",-1)),Dt=["onClick"],xt={key:0,class:"iconfont"},Vt={key:1,class:"moon-icon"},_t={class:"font-list"},Ft=c(()=>e("i",null,"正文字体",-1)),Mt=["onClick"],Pt={class:"font-list"},Ot=c(()=>e("i",null,"自定字体",-1)),Rt=c(()=>e("p",null," 请确认输入的字体名称完整无误，并且该字体已经安装在您的设备上。 ",-1)),Kt=c(()=>e("p",null,"确定保存吗？",-1)),Lt={style:{"text-align":"right",margin:"0"}},Nt=c(()=>e("span",{type:"text",class:"font-item"},"保存",-1)),zt={class:"font-size"},Ht=c(()=>e("i",null,"字体大小",-1)),Jt={class:"resize"},Wt=c(()=>e("em",{class:"iconfont"},"",-1)),qt=[Wt],Tt=c(()=>e("b",null,null,-1)),Gt={class:"lang"},Zt=c(()=>e("b",null,null,-1)),Yt=c(()=>e("em",{class:"iconfont"},"",-1)),Xt=[Yt],jt={class:"letter-spacing"},$t=c(()=>e("i",null,"字距",-1)),eo={class:"resize"},to=c(()=>e("em",{class:"iconfont"},"",-1)),oo=[to],no=c(()=>e("b",null,null,-1)),so={class:"lang"},ao=c(()=>e("b",null,null,-1)),io=c(()=>e("em",{class:"iconfont"},"",-1)),lo=[io],co={class:"line-spacing"},ro=c(()=>e("i",null,"行距",-1)),Ao={class:"resize"},uo=c(()=>e("em",{class:"iconfont"},"",-1)),go=[uo],po=c(()=>e("b",null,null,-1)),fo={class:"lang"},ho=c(()=>e("b",null,null,-1)),vo=c(()=>e("em",{class:"iconfont"},"",-1)),mo=[vo],Co={class:"paragraph-spacing"},bo=c(()=>e("i",null,"段距",-1)),yo={class:"resize"},Io={class:"resize"},Bo=c(()=>e("em",{class:"iconfont"},"",-1)),ko=[Bo],So=c(()=>e("b",null,null,-1)),wo={class:"lang"},Eo=c(()=>e("b",null,null,-1)),Uo=c(()=>e("em",{class:"iconfont"},"",-1)),Qo=[Uo],Do={key:0,class:"read-width"},xo=c(()=>e("i",null,"页面宽度",-1)),Vo={class:"resize"},_o=c(()=>e("em",{class:"iconfont"},"",-1)),Fo=[_o],Mo=c(()=>e("b",null,null,-1)),Po={class:"lang"},Oo=c(()=>e("b",null,null,-1)),Ro=c(()=>e("em",{class:"iconfont"},"",-1)),Ko=[Ro],Lo={class:"infinite-loading"},No=c(()=>e("i",null,"无限加载",-1)),zo={__name:"ReadSettings",setup(s){const o=de(),g=y(0),C=y(o.config.theme==6),i=y(""),U=ze([{background:"rgba(250, 245, 235, 0.8)"},{background:"rgba(245, 234, 204, 0.8)"},{background:"rgba(230, 242, 230, 0.8)"},{background:"rgba(228, 241, 245, 0.8)"},{background:"rgba(245, 228, 228, 0.8)"},{background:"rgba(224, 224, 224, 0.8)"},{background:"rgba(0, 0, 0, 0.5)"}]),d=y({display:"inline",color:"rgba(255,255,255,0.2)"}),k=y(["雅黑","宋体","楷书"]),r=y(o.config.customFontName),h=y(!1);xe(()=>{var I=o.config;g.value=I.theme,g.value==6?i.value="":i.value=""});const l=A(()=>o.config),S=A(()=>({background:X.themes[l.value.theme].popup})),F=A(()=>o.config.theme),N=A(()=>o.config.font),x=I=>{I==6?(C.value=!0,i.value="",d.value.color="#ed4259"):(C.value=!1,i.value="",d.value.color="rgba(255,255,255,0.2)"),l.value.theme=I,E(l.value)},T=I=>{l.value.font=I,E(l.value)},W=()=>{l.value.font=-1,l.value.customFontName=r.value,E(l.value)},z=A(()=>o.config.fontSize),q=()=>{l.value.fontSize<48&&(l.value.fontSize+=2),E(l.value)},u=()=>{l.value.fontSize>12&&(l.value.fontSize-=2),E(l.value)},v=A(()=>o.config.spacing),G=()=>{o.config.spacing.letter-=.01,E(l.value)},ue=()=>{o.config.spacing.letter+=.01,E(l.value)},ge=()=>{o.config.spacing.line-=.1,E(l.value)},pe=()=>{o.config.spacing.line+=.1,E(l.value)},fe=()=>{o.config.spacing.paragraph-=.1,E(l.value)},te=()=>{o.config.spacing.paragraph+=.1,E(l.value)},he=A(()=>o.config.readWidth),oe=()=>{l.value.readWidth+=160,E(l.value)},ve=()=>{l.value.readWidth>640&&(l.value.readWidth-=160),E(l.value)},ne=A(()=>o.config.infiniteLoading),se=I=>{l.value.infiniteLoading=I,E(l.value)},E=I=>{o.setConfig(I),localStorage.setItem("config",JSON.stringify(I)),ae(I)},ae=I=>{Ie.saveReadConfig(I)};return(I,w)=>{const H=We,ie=qe,me=Ve;return f(),m("div",{class:D(["settings-wrapper",{night:n(C),day:!n(C)}]),style:J(n(S))},[wt,e("div",Et,[e("ul",null,[e("li",Ut,[Qt,(f(!0),m($,null,re(n(U),(Q,M)=>(f(),m("span",{class:D(["theme-item",{selected:n(F)==M}]),key:M,style:J(Q),ref_for:!0,ref:"themes",onClick:Ce=>x(M)},[M<6?(f(),m("em",xt,"")):(f(),m("em",Vt,R(n(i)),1))],14,Dt))),128))]),e("li",_t,[Ft,(f(!0),m($,null,re(n(k),(Q,M)=>(f(),m("span",{class:D(["font-item",{selected:n(N)==M}]),key:M,onClick:Ce=>T(M)},R(Q),11,Mt))),128))]),e("li",Pt,[Ot,L(H,{effect:"dark",content:"自定义的字体名称",placement:"top"},{default:K(()=>[He(e("input",{type:"text",class:"font-item font-item-input","onUpdate:modelValue":w[0]||(w[0]=Q=>Ae(r)?r.value=Q:null),placeholder:"请输入自定义的字体名称"},null,512),[[Je,n(r)]])]),_:1}),L(me,{placement:"top",width:"180",trigger:"click",visible:n(h),"onUpdate:visible":w[3]||(w[3]=Q=>Ae(h)?h.value=Q:null)},{reference:K(()=>[Nt]),default:K(()=>[Rt,Kt,e("div",Lt,[L(ie,{size:"small",plain:"",onClick:w[1]||(w[1]=Q=>h.value=!1)},{default:K(()=>[Z("取消")]),_:1}),L(ie,{type:"primary",size:"small",onClick:w[2]||(w[2]=Q=>{W(),h.value=!1})},{default:K(()=>[Z("确定")]),_:1})])]),_:1},8,["visible"])]),e("li",zt,[Ht,e("div",Jt,[e("span",{class:"less",onClick:u},qt),Tt,Z(),e("span",Gt,R(n(z)),1),Zt,e("span",{class:"more",onClick:q},Xt)])]),e("li",jt,[$t,e("div",eo,[e("span",{class:"less",onClick:G},oo),no,Z(),e("span",so,R(n(v).letter.toFixed(2)),1),ao,e("span",{class:"more",onClick:ue},lo)])]),e("li",co,[ro,e("div",Ao,[e("span",{class:"less",onClick:ge},go),po,Z(),e("span",fo,R(n(v).line.toFixed(1)),1),ho,e("span",{class:"more",onClick:pe},mo)])]),e("li",Co,[bo,e("div",yo,[e("div",Io,[e("span",{class:"less",onClick:fe},ko),So,e("span",wo,R(n(v).paragraph.toFixed(1)),1),Eo,e("span",{class:"more",onClick:te},Qo)])])]),n(o).miniInterface?le("",!0):(f(),m("li",Do,[xo,e("div",Vo,[e("span",{class:"less",onClick:ve},Fo),Mo,Z(),e("span",Po,R(n(he)),1),Oo,e("span",{class:"more",onClick:oe},Ko)])])),e("li",Lo,[No,(f(),m("span",{class:D(["infinite-loading-item",{selected:n(ne)==!1}]),key:0,onClick:w[4]||(w[4]=Q=>se(!1))},"关闭",2)),(f(),m("span",{class:D(["infinite-loading-item",{selected:n(ne)==!0}]),key:1,onClick:w[5]||(w[5]=Q=>se(!0))},"开启",2))])])])],6)}}},Ho=ee(zo,[["__scopeId","data-v-7c8b23a7"]]);const Jo={__name:"CatalogItem",props:["index","source","gotoChapter"],setup(s){const o=de(),g=A(()=>o.readingBook.index),C=i=>i==g.value;return(i,U)=>(f(),m("div",{class:D(["cata-text",{selected:C(s.source.index)}]),onClick:U[0]||(U[0]=d=>s.gotoChapter(s.source))},R(s.source.title),3))}},Wo=ee(Jo,[["__scopeId","data-v-7445d2ee"]]);const qo=s=>(Be("data-v-1eed4340"),s=s(),ke(),s),To=qo(()=>e("div",{class:"title"},"目录",-1)),Go={__name:"PopCatalog",emits:["getContent"],setup(s,{emit:o}){const g=de(),C=A(()=>d.value==6),{catalog:i,popCataVisible:U}=_e(g),d=A(()=>g.config.theme),k=A(()=>({background:X.themes[d.value].popup})),r=A({get:()=>g.readingBook.index,set:S=>g.readingBook.index=S}),h=y();Fe(U,S=>{S||ce(()=>h.value.scrollToIndex(r.value))});const l=S=>{r.value=i.value.indexOf(S),g.setPopCataVisible(!1),g.setContentLoading(!0),o("getContent",r.value)};return Te(()=>{g.popCataVisible=!1}),(S,F)=>(f(),m("div",{class:"cata-wrapper",style:J(n(k))},[To,L(n(Ge),{style:{height:"300px",overflow:"auto"},class:D({night:n(C),day:!n(C)}),ref_key:"virtualListRef",ref:h,"data-key":"url","wrap-class":"data-wrapper","item-class":"cata","data-sources":n(i),"data-component":Wo,"estimate-size":40,"extra-props":{gotoChapter:l}},null,8,["class","data-sources","extra-props"])],4))}},Zo=ee(Go,[["__scopeId","data-v-1eed4340"]]),Yo=(s,o,g,C)=>(s/=C/2,s<1?g/2*s*s+o:(s--,-g/2*(s*(s-2)-1)+o)),Xo=()=>{let s,o,g,C,i,U,d,k,r,h,l,S,F;function N(){let u=s.scrollTop||s.scrollY||s.pageYOffset;return u=typeof u>"u"?0:u,u}function x(u){const v=u.getBoundingClientRect().top,G=s.getBoundingClientRect?s.getBoundingClientRect().top:0;return v-G+g}function T(u){s.scrollTo?s.scrollTo(0,u):s.scrollTop=u}function W(u){h||(h=u),l=u-h,S=U(l,g,k,r),T(S),l<r?requestAnimationFrame(W):z()}function z(){T(g+k),o&&d&&(o.setAttribute("tabindex","-1"),o.focus()),typeof F=="function"&&F(),h=!1}function q(u,v={}){switch(r=v.duration||1e3,i=v.offset||0,F=v.callback,U=v.easing||Yo,d=v.a11y||!1,typeof v.container){case"object":s=v.container;break;case"string":s=document.querySelector(v.container);break;default:s=window}switch(g=N(),typeof u){case"number":o=void 0,d=!1,C=g+u;break;case"object":o=u,C=x(o);break;case"string":o=document.querySelector(u),C=x(o);break}switch(k=C-g+i,typeof v.duration){case"number":r=v.duration;break;case"function":r=v.duration(k);break}requestAnimationFrame(W)}return q},Y=Xo();const _=s=>(Be("data-v-18d0b912"),s=s(),ke(),s),jo={class:"tools"},$o=_(()=>e("div",{class:"iconfont"},"",-1)),en=_(()=>e("div",{class:"icon-text"},"目录",-1)),tn=[$o,en],on=_(()=>e("div",{class:"iconfont"},"",-1)),nn=_(()=>e("div",{class:"icon-text"},"设置",-1)),sn=[on,nn],an=_(()=>e("div",{class:"iconfont"},"",-1)),ln=_(()=>e("div",{class:"icon-text"},"书架",-1)),cn=[an,ln],rn=_(()=>e("div",{class:"iconfont"},"",-1)),An=_(()=>e("div",{class:"icon-text"},"顶部",-1)),dn=[rn,An],un=_(()=>e("div",{class:"iconfont"},"",-1)),gn=_(()=>e("div",{class:"icon-text"},"底部",-1)),pn=[un,gn],fn={class:"tools"},hn=_(()=>e("div",{class:"iconfont"},"",-1)),vn={key:0},mn={key:0},Cn=_(()=>e("div",{class:"iconfont"},"",-1)),bn=_(()=>e("div",{class:"chapter-bar"},null,-1)),yn={class:"content"},In=["chapterIndex"],Bn={__name:"BookChapter",setup(s){const o=y(!1),g=y(null),C=y();Fe(o,t=>{var a;if(!t)return(a=g.value)==null?void 0:a.close();g.value=$e.service({target:C.value,spinner:tt,text:"正在获取信息",lock:!0})});const i=de();try{const t=JSON.parse(localStorage.getItem("config"));t!=null&&i.setConfig(t)}catch{localStorage.removeItem("config")}const U=y(),d=y(!0),k=y(!1),r=y([]),h=y(null),l=y(null),{catalog:S,popCataVisible:F,readSettingsVisible:N,miniInterface:x,showContent:T,config:W,readingBook:z}=_e(i),q=A({get:()=>z.value.chapterPos,set:t=>z.value.chapterPos=t}),u=A({get:()=>z.value.index,set:t=>z.value.index=t}),v=A(()=>W.value.theme),G=A(()=>W.value.infiniteLoading),ue=A(()=>i.config.font>=0?X.fonts[i.config.font]:i.config.customFontName),ge=A(()=>i.config.fontSize+"px"),pe=A(()=>X.themes[v.value].body),fe=A(()=>X.themes[v.value].content),te=A(()=>X.themes[v.value].popup),he=A(()=>x.value?window.innerWidth+"px":i.config.readWidth-130+"px"),oe=A(()=>x.value?window.innerWidth-33:i.config.readWidth-33),ve=A(()=>({background:pe.value})),ne=A(()=>({background:fe.value,width:he.value})),se=A(()=>({background:te.value,marginLeft:x.value?0:-(i.config.readWidth/2+68)+"px",display:x.value&&!k.value?"none":"block"})),E=A(()=>({background:te.value,marginRight:x.value?0:-(i.config.readWidth/2+52)+"px",display:x.value&&!k.value?"none":"block"})),ae=A(()=>v.value==6);ye(()=>{r.value.length>0&&(i.setContentLoading(!1),Ke())}),ye(()=>{var t;document.title=((t=S.value[u.value])==null?void 0:t.title)||document.title,i.saveBookProcess()}),ye(()=>{var t,a;G.value?(a=h.value)==null||a.observe(U.value):(t=h.value)==null||t.disconnect()});const I=y(),w=(t,a=!0,b=0)=>{a&&(i.setShowContent(!1),o.value=!0,Y(I.value,{duration:0}),Ee(t,b));let B=sessionStorage.getItem("bookUrl"),{title:V,index:P}=S.value[t];Ie.getBookContent(B,P).then(p=>{if(p.data.isSuccess){let Le=p.data.data.split(/\n+/);be({index:t,content:Le,title:V},a),a&&ie(b)}else{O({message:p.data.errorMsg,type:"error"});let j=[p.data.errorMsg];be({index:t,content:j,title:V},a)}if(i.setContentLoading(!0),o.value=!1,d.value=!1,i.setShowContent(!0),!p.data.isSuccess)throw p.data},p=>{throw O({message:"获取章节内容失败",type:"error"}),be({index:t,content:["获取章节内容失败！"],title:V},a),o.value=!1,i.setShowContent(!0),p})},H=y(),ie=t=>{ce(()=>{let a=0;if(H.value.length==1){for(let b of H.value[0].children)if(a+=parseInt(b.getAttribute("wordCount"))+1,a-1>=t){Y(b,{duration:0});break}}})},me=()=>{if(H.value.length==0)return;let t=H.value.find(b=>b.getAttribute("chapterIndex")==u.value);if(!t)return;let a=0;for(let b of t.children)if(a+=parseInt(b.getAttribute("wordCount"))+1,b.getBoundingClientRect().top>=0){q.value=a-1;break}},Q=y(),M=()=>{Y(I.value)},Ce=()=>{Y(Q.value)},Se=()=>{i.setContentLoading(!0);let t=u.value+1;typeof S.value[t]<"u"?(O({message:"下一章",type:"info"}),w(t)):O({message:"本章是最后一章",type:"error"})},we=()=>{i.setContentLoading(!0);let t=u.value-1;typeof S.value[t]<"u"?(O({message:"上一章",type:"info"}),w(t)):O({message:"本章是第一章",type:"error"})},Ee=(t,a=q.value)=>{let b=sessionStorage.getItem("bookUrl");var B=JSON.parse(localStorage.getItem(b));B.index=t,B.chapterPos=a,localStorage.setItem(b,JSON.stringify(B)),B=JSON.parse(localStorage.getItem("readingRecent")),B.chapterIndex=t,B.chapterPos=a,localStorage.setItem("readingRecent",JSON.stringify(B)),u.value=t,q.value=a,sessionStorage.setItem("chapterIndex",t),sessionStorage.setItem("chapterPos",String(a))},be=async(t,a)=>{a&&r.value.splice(0),r.value.push(t)},Me=()=>{let t=r.value.slice(-1)[0].index;S.value.length-1>t&&w(t+1,!1)},Pe=Xe(),Ue=()=>{Pe.push("/")},Qe=t=>{switch(t.key){case"ArrowLeft":t.stopPropagation(),t.preventDefault(),we();break;case"ArrowRight":t.stopPropagation(),t.preventDefault(),Se();break;case"ArrowUp":t.stopPropagation(),t.preventDefault(),document.documentElement.scrollTop===0?O({message:"已到达页面顶部",type:"warn"}):Y(0-document.documentElement.clientHeight+100);break;case"ArrowDown":t.stopPropagation(),t.preventDefault(),document.documentElement.clientHeight+document.documentElement.scrollTop===document.documentElement.scrollHeight?O({message:"已到达页面底部",type:"warn"}):Y(document.documentElement.clientHeight-100);break}},Oe=t=>{if(!o.value)for(let{isIntersecting:a}of t){if(!a)return;Me()}},Re=t=>{ce(()=>{for(let{isIntersecting:a,target:b,boundingClientRect:B}of t){let V=parseInt(b.getAttribute("chapterIndex"));a?u.value=V:B.top<0?u.value=V+1:u.value=V-1}})},Ke=()=>{ce(()=>{let t=H.value;t&&t.forEach(a=>l.value.observe(a))})};return Ze((t,a,b)=>{me(),Ee(u.value),b()}),xe(()=>{o.value=!0;let t=sessionStorage.getItem("bookUrl"),a=sessionStorage.getItem("bookName"),b=sessionStorage.getItem("bookAuthor"),B=Number(sessionStorage.getItem("chapterIndex")||0),V=Number(sessionStorage.getItem("chapterPos")||0);var P=JSON.parse(localStorage.getItem(t));(P==null||B!=P.index||V!=P.chapterPos)&&(P={bookName:a,bookAuthor:b,bookUrl:t,index:B,chapterPos:V},localStorage.setItem(t,JSON.stringify(P))),Ie.getChapterList(t).then(p=>{if(o.value=!1,!p.data.isSuccess){O({message:p.data.errorMsg,type:"error"}),setTimeout(Ue,500);return}let j=p.data.data;i.setCatalog(j),i.setReadingBook(P),i.popCataVisible=!0,w(B,!0,V),window.addEventListener("keyup",Qe),h.value=new IntersectionObserver(Oe,{rootMargin:"-100% 0% 20% 0%"}),G.value&&h.value.observe(U.value),l.value=new IntersectionObserver(Re),document.title=null,document.title=a+" | "+S.value[B].title},p=>{throw o.value=!1,O({message:"获取书籍目录失败",type:"error"}),p})}),Ye(()=>{var t,a;window.removeEventListener("keyup",Qe),N.value=!1,F.value=!1,(t=h.value)==null||t.disconnect(),(a=l.value)==null||a.disconnect()}),(t,a)=>{const b=Zo,B=Ve,V=Ho,P=lt;return f(),m("div",{class:D(["chapter-wrapper",{night:n(ae),day:!n(ae)}]),style:J(n(ve)),onClick:a[2]||(a[2]=p=>k.value=!n(k))},[e("div",{class:"tool-bar",style:J(n(se))},[e("div",jo,[L(B,{placement:"right",width:n(oe),trigger:"click","show-arrow":!1,visible:n(F),"onUpdate:visible":a[0]||(a[0]=p=>Ae(F)?F.value=p:null),"popper-class":"pop-cata"},{reference:K(()=>[e("div",{class:D(["tool-icon",{"no-point":n(d)}])},tn,2)]),default:K(()=>[L(b,{onGetContent:w,class:"popup"})]),_:1},8,["width","visible"]),L(B,{placement:"right",width:n(oe),trigger:"click","show-arrow":!1,visible:n(N),"onUpdate:visible":a[1]||(a[1]=p=>Ae(N)?N.value=p:null),"popper-class":"pop-setting"},{reference:K(()=>[e("div",{class:D(["tool-icon",{"no-point":n(d)}])},sn,2)]),default:K(()=>[L(V,{class:"popup"})]),_:1},8,["width","visible"]),e("div",{class:"tool-icon",onClick:Ue},cn),e("div",{class:D(["tool-icon",{"no-point":n(d)}]),onClick:M},dn,2),e("div",{class:D(["tool-icon",{"no-point":n(d)}]),onClick:Ce},pn,2)])],4),e("div",{class:"read-bar",style:J(n(E))},[e("div",fn,[e("div",{class:D(["tool-icon",{"no-point":n(d)}]),onClick:we},[hn,n(x)?(f(),m("span",vn,"上一章")):le("",!0)],2),e("div",{class:D(["tool-icon",{"no-point":n(d)}]),onClick:Se},[n(x)?(f(),m("span",mn,"下一章")):le("",!0),Cn],2)])],4),bn,e("div",{class:"chapter",ref_key:"content",ref:C,style:J(n(ne))},[e("div",yn,[e("div",{class:"top-bar",ref_key:"top",ref:I},null,512),(f(!0),m($,null,re(n(r),p=>(f(),m("div",{key:p.index,chapterIndex:p.index,ref_for:!0,ref_key:"chapter",ref:H},[n(T)?(f(),je(P,{key:0,contents:p.content,title:p.title,spacing:n(i).config.spacing,fontSize:n(ge),fontFamily:n(ue)},null,8,["contents","title","spacing","fontSize","fontFamily"])):le("",!0)],8,In))),128)),e("div",{class:"loading",ref_key:"loading",ref:U},null,512),e("div",{class:"bottom-bar",ref_key:"bottom",ref:Q},null,512)])],4)],6)}}},En=ee(Bn,[["__scopeId","data-v-18d0b912"]]);export{En as default};
