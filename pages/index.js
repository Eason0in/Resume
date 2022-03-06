import { useEffect, useState } from 'react'
import ColorBlock from '../component/ColorBlock'
import CopyRight from '../component/CopyRight'
import PreLoader from '../component/PreLoader'
import PreLoaderRight from '../component/PreLoaderRight'

const arr = ['resume', 'portfolio', 'blog', 'contact']
export default function HomePage() {
  const [active, setActive] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  const handleMenuClick = (target) => {
    setActive(target)
  }

  useEffect(() => {
    if (active) {
      const selectItem = document.getElementById(active)
      selectItem.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }, [active])

  const handleMenuClose = () => {
    setActive('')
  }

  const handleNameBlockClick = (e) => {
    const findNameBlock = e.target.closest('.name-block')
    const isReverse = findNameBlock.classList.contains('reverse')
    if (isReverse) setActive('')
  }

  return (
    <>
      <PreLoader isLoading={isLoading} />

      <PreLoaderRight isLoading={isLoading} />

      <div className={['menu-container', active ? 'showx' : ''].join(' ')}>
        <ul className="menu">
          <li
            onClick={() => handleMenuClick('resume')}
            className={['resume text-capitalize', active === 'resume' ? 'active' : ''].join(' ')}
          >
            resume
          </li>
          <li
            onClick={() => handleMenuClick('portfolio')}
            className={['portfolio text-capitalize', active === 'portfolio' ? 'active' : ''].join(' ')}
          >
            portfolio
          </li>
          <li
            onClick={() => handleMenuClick('blog')}
            className={['blog text-capitalize', active === 'blog' ? 'active' : ''].join(' ')}
          >
            blog
          </li>
          <li
            onClick={() => handleMenuClick('contact')}
            className={['contact text-capitalize', active === 'contact' ? 'active' : ''].join(' ')}
          >
            contact
          </li>
          <li onClick={handleMenuClose} id="close">
            <i className="ion-ios-close-empty"></i>
          </li>
        </ul>
      </div>

      <section className="home img-bg" data-testid="home">
        <ColorBlock />

        <CopyRight />

        <div className="container">
          <div onClick={handleNameBlockClick} className={['name-block', active ? 'reverse' : ''].join(' ')}>
            <div className="name-content">
              <h1>Eason Lin</h1>
              <h2>Front-End Developer</h2>
              <div className="intro">
                擁有 3+ 年網頁開發經驗，1.5 年全端工程師, 2 年前端工程師, 追求簡潔且擴充性高的程式碼。
              </div>
              <a
                target="_blank"
                href="https://www.cakeresume.com/pdf/s--F3t6ejx2d_qimO1Zc0yp0Q--/r8jwN.pdf"
                className="btn btn-download"
              >
                <span>
                  <small data-hover="Download Resume">Download Resume</small>
                </span>
              </a>
            </div>
          </div>

          <div className={['menu-blocks', active ? 'hidex' : ''].join(' ')}>
            {arr.map((item) => (
              <div
                key={item}
                onClick={() => handleMenuClick(item)}
                className={`${item}-block menu-block`}
                data-testid={`menu-block-${item}`}
              >
                <div className={`${item}-content`}>
                  <h2 className={`menu-item text-uppercase ${item}`}>{item}</h2>
                </div>
              </div>
            ))}
          </div>

          <div
            className={['content-blocks', active === 'resume' ? 'showx' : ''].join(' ')}
            id="resume"
            data-testid="resume"
          >
            <section className="content">
              <div className="block-content">
                <h3 className="block-title">
                  Profile
                  <span>
                    <hr />
                  </span>
                </h3>

                <div className="info-list row">
                  <div className="col-12 col-md-6">
                    <span>Name : </span> 林依靜 Eason Lin
                  </div>
                  <div className="col-12 col-md-6">
                    <span>Education : </span> 國立台中科技大學-會計資訊系
                  </div>
                  <div className="col-12 col-md-6">
                    <span>Address : </span> New Taipei City
                  </div>
                  <div className="col-12 col-md-6">
                    <span>Date of birth: </span> Auguest 21, 1992
                  </div>
                  <div className="col-12 col-md-6">
                    <span>Email : </span>
                    <a href="mailto:leoling127@gmail.com?subject=Hi! Eason"> leoling127@gmail.com</a>
                  </div>
                  <div className="col-12 col-md-6">
                    <span>Phone : </span>
                    <a href="tel:+886922222476"> (+886)922222476</a>
                  </div>
                </div>
              </div>
              <div className="block-content">
                <h3 className="block-title">
                  Experience
                  <span>
                    <hr />
                  </span>
                </h3>
                <div className="row">
                  <div className="col-12">
                    <div className="exp-holder">
                      <div className="exp">
                        <div className="hgroup">
                          <h4>
                            <span>Front-End Developer</span> @ 易遊網股份有限公司
                          </h4>
                          <h5>Dec 2019 -</h5>
                        </div>
                        <p>
                          國內著名旅遊平台網站，擁有各式團旅、自由行及餐券等旅遊產品。
                          <br />
                          國外團旅, 自由行及郵輪 + 國內部分前端程式碼 / 與專案經理、設計師討論樣式操作 /
                          與後端工程師討論資料格式
                          <br />
                          使用 React、Next.js、TypeScript、Play Scala 及 JQuery 增加國內外團旅使用者體驗及各項功能。
                        </p>
                        <h5 className="mb-3">工作描述</h5>
                        <ul className="skills">
                          <li>運用測試項目使 Bugs 減少網頁出錯及客戶跳出率 50 %</li>
                          <li>整理程式碼減少執行時間 20%</li>
                          <li>JSON-LD 增加 SEO 提升網站排行 10 %</li>
                          <li>增加 GTM 追蹤網站數據利行銷分析並提高業績 10 %</li>
                          <li>React 渲染每個國家地區資料減少網頁載入時間 30 秒</li>
                          <li>相容各大瀏覽器提升業績 5 %</li>
                          <li>開發公司共用元件 Storybook，減少開發重複程式碼 50 %</li>
                          <li>開發供應商出團資料系統，增加出團人員上架商品作業及記錄資料之效率 10 %</li>
                        </ul>
                        <h6>瀏覽紀錄 / 商品比較 / 商品儲存工具</h6>
                        <ul className="skills">
                          <li>良好的商品歸納方便客戶比較，增加訂單 40％</li>
                          <li>商品被分享的次數增加 20%</li>
                        </ul>
                        <h6>活動頁</h6>
                        <ul className="skills">
                          <li>方便客戶進行比較並下單商品增加 40％</li>
                          <li>提供５種版型使行銷同事增加活動頁銷售額 20%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="exp-holder">
                      <div className="exp">
                        <div className="hgroup">
                          <h4>
                            <span>Full-Stack Developer</span> @ 瑞智資訊有限公司
                          </h4>
                          <h5>Aug 2017 - Dec 2018</h5>
                        </div>
                        <p>
                          專門銜接舊技術及改寫客戶內部既有軟體之接案公司。
                          <br />
                          主要透過 AngularJS 設計內部人員及系統管理人員客製化之操作介面，後端運用 C#
                          處理資料運算及結構轉換，使用 Microsoft SQL Server 設計資料庫及儲存資料，使用 Internet
                          Information Services 簡稱 IIS 為客戶架設公司伺服器端供內部人員使用。
                        </p>
                        <h5 className="mb-3">參與之專案及負責工作內容</h5>
                        <h6>台新銀行傳真系統</h6>
                        <ul className="skills">
                          <li>AngularJS + Bootstrap 4 減少每次網頁載入時間 30 秒。</li>
                          <li>C# + Microsoft SQL Server 處理資料結構及轉換供傳真伺服器使用。</li>
                          <li>設定 IIS 為客戶架設內部伺服器端。</li>
                          <li>串接 LDAP 資料作為權限管理之經驗。</li>
                          <li>整合 FTP 儲存傳真檔案。</li>
                          <li>整合 OCR 檔案資訊儲存至資料庫。</li>
                        </ul>
                        <h6>台北市七星農田水利會租賃系統</h6>
                        <ul className="skills">
                          <li>AngularJS + Bootstrap 4 美化頁面。</li>
                          <li>C# + Microsoft SQL Server 讀取資料供前端使用。</li>
                          <li>設定 IIS 為客戶架設內部伺服器端。</li>
                          <li>使用 Telerik 產生內部報表及租賃繳款單。</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-content">
                <h3 className="block-title">
                  Skills
                  <span>
                    <hr />
                  </span>
                </h3>
                <div className="row">
                  <div className="col-12">
                    <h3>Front-End</h3>
                    <ul className="skills">
                      <li>
                        <h4>HTML / CSS</h4>
                        <ul>
                          <li>Pug</li>
                          <li>SCSS、Less</li>
                          <li>Bootstrap 4 / Materialize</li>
                          <li>RWD</li>
                          <li>Play Scala</li>
                        </ul>
                      </li>
                      <li>
                        <h4>JavaScript ES6</h4>
                        <ul>
                          <li>React / Redux / Next.js</li>
                          <li>React Hook</li>
                          <li>Storybook</li>
                          <li>TypeScript</li>
                          <li>JSON-LD</li>
                          <li>GTM</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <h3>Back-End</h3>
                    <ul>
                      <li>搭配 Node.js + Express 建立 RESTful API。</li>
                      <li>串接及創建 Microsoft SQL Server、Firebase、MySQL 及 MongoDB 資料庫。</li>
                      <li>使用 Express Handlebars 建立後端渲染頁面。</li>
                      <li>使用 Nodemailer + Gmail 製作郵件發送功能。</li>
                      <li>使用 SendGrid 製作並由伺服器發送郵件經驗。</li>
                      <li>使用 GitHub 多人開發版本控管及基本指令。</li>
                      <li>使用 Postman 測試API資料及傳送。</li>
                      <li>使用 Visual Studio Code Debug 功能。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={['content-blocks', active === 'portfolio' ? 'showx' : ''].join(' ')} id="portfolio">
            <section className="content">
              <div className="block-content">
                <h3 className="block-title">
                  Portfolio
                  <span>
                    <hr />
                  </span>
                </h3>
                <div className="portfolio-item">
                  <div className="col-12 mx-auto mb-4">
                    <img src="./images/personal-website.png" alt="portfolio" />
                  </div>
                  <div className="col-12 mx-auto">
                    <div className="subtitle">
                      <h3>個人網站</h3>
                      <div className="github">
                        <a href="https://github.com/Eason0in/Resume" target="_blank" rel="nofollow noopener noreferrer">
                          <i className="ion-social-github"></i>GitHub
                        </a>
                      </div>
                      <div className="demo">
                        <a
                          href="https://resume-leoling127.vercel.app/"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <i className="fa fa-play-circle" aria-hidden="true"></i>Demo
                        </a>
                      </div>
                    </div>
                    <div className="desc">
                      <p>關於自己的網站, 裡面包含個人履歷、作品集、部落格及聯絡資訊</p>
                    </div>
                    <div className="technology">
                      <p>[相關技術]</p>
                      <ul>
                        <li>使用 vercel 部署網站</li>
                        <li>使用 html + CSS 及美化頁面。</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="col-12 mx-auto mb-4">
                    <img src="./images/EE.jpg" alt="portfolio" />
                  </div>
                  <div className="col-12 mx-auto">
                    <div className="subtitle">
                      <h3>旅遊規劃幫手 － EagleEyes</h3>
                      <div className="github">
                        <a
                          href="https://github.com/Eason0in/EagleEyes-vue"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>GitHub
                        </a>
                      </div>
                      <div className="demo">
                        <a
                          href="https://ee-vue.leoling127.now.sh/#/"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <i className="fa fa-play-circle" aria-hidden="true"></i>Demo
                        </a>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        第六屆 PIXNET HACKATHON Taiwan Browser 翻轉在地體驗比賽之作品，使用 PIXNET API
                        搜尋使用者旅行地點的熱門文章，並智能規劃行程供使用者參考。 主要負責 Vue 及 Vuetify 架構以及 API
                        的串接。
                      </p>
                    </div>
                    <div className="technology">
                      <p>[相關技術]</p>
                      <ul>
                        <li>使用 Vue CLI 3 開發網站。</li>
                        <li>使用 Vuetify + SCSS 管理 CSS 及美化頁面。</li>
                        <li>使用 Vue Component 管理重複結構。</li>
                        <li>透過 Router 管理前後台路由。</li>
                      </ul>

                      <p>[遇到的問題]</p>
                      <ul>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>使用 Router
                          傳遞使用者的旅遊時間、地點及目的，在不需要這些參數的步驟中還是要接收並傳至下一個 Router 使網頁
                          Url 變的很冗長。
                          <br />
                          <span className="font-weight-bold">Solution: </span>應該要加入 Vuex 管理統一資料，沒用到資料的
                          Component 就無需幫忙傳遞。
                        </li>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>初賽甄選時使用 Materialize CDN 直接搭配
                          HTML 、 CSS 及 JavaScript 寫程式，初賽入圍後導入 Vue 框架發現 Materialize
                          的一些動畫效果都失效，因為 .Vue 會經過編譯才轉換成原生 HTML 、 CSS 及 JavaScript。
                          <br />
                          <span className="font-weight-bold">Solution: </span>搜尋資料找到運用 Materialize for Vue
                          的框架 Vuetify ，學習並使用在此專案中。
                        </li>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>串接後端 API 時失出現 <br />
                          <code>'Access-Control-Allow-Origin' header is present on the requested resource</code>。
                          <br />
                          <span className="font-weight-bold">Solution: </span>學習程式的教學平台助教有開直播跟同學們分享
                          跨來源資源共用 CORS 這個問題，所以一看到就立馬通知後端的隊友處理這個跨瀏覽器資料共享的問題。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="col-12 mx-auto mb-4">
                    <img src="./images/KB.png" alt="portfolio" />
                  </div>
                  <div className="col-12 mx-auto">
                    <div className="subtitle">
                      <h3>KinkyBoots 歌劇網站</h3>
                      <div className="github">
                        <a
                          href="https://github.com/Eason0in/Kinky-Boots-server"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>GitHub-後端
                        </a>
                        <a
                          href="https://github.com/Eason0in/Kinky-Boots-client"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>GitHub-前端
                        </a>
                      </div>
                      <div className="demo">
                        <a href="https://kinky-boots.now.sh/#/" target="_blank" rel="nofollow noopener noreferrer">
                          <i className="fa fa-play-circle" aria-hidden="true"></i>Demo
                        </a>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        KinkyBoots 網頁包含介紹歌劇院、商店頁面購買靴子及訂票頁面，可觀看剩餘座位票數，訂購完成會寄送
                        Email 確認信。 主要負責後端資料庫處理及 Email 發送功能，前端部分負責串接 API
                        資料，並綁定至畫面上。
                      </p>
                    </div>
                    <div className="technology">
                      <p>[相關技術]</p>
                      <ul>
                        <li>使用 Vue CLI 3 開發 SPA 網站。</li>
                        <li>透過 Router 管理前後台路由。</li>
                        <li>jQuery 製作功能頁面及商店頁面動畫。</li>
                      </ul>

                      <p>[遇到的問題]</p>
                      <ul>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>第一次把 jQuery 加入 Vue
                          的專案，要如何在每一個 .vue 檔都能使用到 jQuery 選擇器 $ 呢?
                          <br />
                          <span className="font-weight-bold">Solution: </span>跟夥伴上網搜尋方法，最後在 Youtube
                          上搜尋到教學影片，而且也發現 jQuery + JavaScript 可以更方便撰寫程式，例如:
                          <br />
                          <code>{'$(`.${CurrentBoot}`).attr("src", `/static/${getBootsColor}.png`)'}</code>
                          <br />
                          可以把選擇目標 (CurrentBoot) 及圖片路徑 (getBootsColor) 轉換成動態的變數。
                        </li>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>SendGrid
                          發送訂票通知信時都會被分到垃圾信箱。
                          <br />
                          <span className="font-weight-bold">Solution: </span>原本以為在 SendGrid
                          的系統可以設定這個問題，最後找到的解決方法是設定 Domain Name 讓 Gmail
                          不要判斷為垃圾信或廣告信，有試著將放在 heroku 的 Domain Name 設定至 SendGrid 後台，也許是因為
                          heroku 網址有亂數所以還是失敗。
                        </li>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>後端發送 Email 的信無法套用 CSS className
                          郵件格式整個跑掉。
                          <br />
                          <span className="font-weight-bold">Solution: </span>想到平常收信時都會看到排版過的 Email
                          所以到自己的信箱尋找類似的 Email 結果發現都使用 Inline CSS ，不過也發現有亂碼的 className
                          ，後來對照一下 Inline CSS 發現原來 Gmail 會編譯過一次才寄出。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="col-12 mx-auto mb-4">
                    <img src="./images/EGTool.png" alt="portfolio" />
                  </div>
                  <div className="col-12 mx-auto">
                    <div className="subtitle">
                      <h3>EGTool</h3>
                      <div className="demo">
                        <a
                          href="https://drive.google.com/file/d/1iLZyl5-_CNL0QT-9I6sPamiMVPMWr1M-/view?usp=sharing"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <i className="fa fa-play-circle" aria-hidden="true"></i>Demo - Windows 軟體版
                        </a>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        EGTool 是源自於前一份全端工程師工作時所發想的 Windows
                        軟體，當時專案有很多待辦事項，一開始使用記事本，但又有暫時需要存放的資料，一次要開好幾個記事本桌面很雜亂，所以就製作一個可以同時兼具這兩種功能的軟體，後來還新增休息提醒以及
                        Microsoft SQL 欄位轉換 C# model 的功能。
                      </p>
                    </div>
                    <div className="technology">
                      <p>[相關技術]</p>
                      <ul>
                        <li>使用記事本存放專案的資料。</li>
                        <li>使用 C# Windows Form 撰寫程式碼。</li>
                        <li>使用計時器提醒休息時間。</li>
                        <li>使用 icon 代替文字功能按鈕。</li>
                      </ul>

                      <p>[遇到的問題]</p>
                      <ul>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>要怎麼與 Windows 開啟檔案的畫面互動 (
                          開啟檔案或是另存新檔 ) ?
                          <br />
                          <span className="font-weight-bold">Solution: </span>搜尋 Windows Form open txt ，找到
                          OpenFileDialog 及 SaveFileDialog 這兩個開啟及存檔的元件，經由不斷嘗試後完成此互動功能。
                        </li>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>要怎麼讀取 .txt 檔案內容 ?
                          <br />
                          <span className="font-weight-bold">Solution: </span>搜尋 Windows Form read txt ，找到
                          ReadAllText() 及 WriteAllText() 兩個 Function ， 之後又遇到檔案變亂碼，後來發現需要設定
                          Encoding 為 Default。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="col-12 mx-auto mb-4">
                    <img src="./images/todoX.png" alt="portfolio" />
                  </div>
                  <div className="col-12 mx-auto">
                    <div className="subtitle">
                      <h3>代辦事項 X</h3>
                      <div className="github">
                        <a href="https://github.com/Eason0in/todoX" target="_blank" rel="nofollow noopener noreferrer">
                          <i className="ion-social-github"></i>GitHub
                        </a>
                      </div>
                      <div className="demo">
                        <a href="https://todox-74ff1.web.app/" target="_blank" rel="nofollow noopener noreferrer">
                          <i className="fa fa-play-circle" aria-hidden="true"></i>Demo
                        </a>
                      </div>
                    </div>
                    <div className="desc">
                      <p>
                        代辦事項 X 是 EGTool (全端工程師時工作開發的 Windows 軟體)的 Web
                        版，考量到不只工作，生活上也需要記錄很多待辦事項，這次也增加依照 Project
                        不同管理各別的待辦事項。
                      </p>
                    </div>
                    <div className="technology">
                      <p>[相關技術]</p>
                      <ul>
                        <li>使用 React 開發 SPA 網站。</li>
                        <li>透過 Redux 統一管理資料。</li>
                        <li>透過 Thunk 結合非同步與後端資料庫互動。</li>
                        <li>使用 Firebase 管理 Server 端、資料庫以及使用者權限。</li>
                        <li>使用 Materialize 美化頁面。</li>
                      </ul>

                      <p>[遇到的問題]</p>
                      <ul>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>設定 this.setState()
                          時發現資料沒有即時更新。
                          <br />
                          <span className="font-weight-bold">Solution: </span>後來發現 this.setState()
                          因為效能的關係並不保證即時更新，所以後來就用 updater 的方式傳一個 callback
                          解決不保證即時更新的問題。
                        </li>
                        <li className="mb-2">
                          <span className="font-weight-bold">Question: </span>刪除 Project 裡面的 Todos
                          也要一併刪除，一開始這樣寫但是馬上就報錯
                          <br />
                          <code>firestore.collection('todos').where('projectId', '==', id).delete()</code>
                          <br />
                          <span className="font-weight-bold">Solution: </span>上網搜尋後發現需要先把所有資料拿出來
                          <br />
                          <code>return firestore.collection('todos').where('projectId', '==', id).get()</code>
                          <br />
                          然後在 callback function
                          把子資料一個個刪除；不過如果是大專案一定不可能這樣做，光撈出全部的子資料就可能花很多時間，於是我思考有沒有可能集合中新增子集合
                          ? ，結果真的有，於是我很好奇如果刪掉集合那子集合會跟著刪除嗎 ?
                          結果子集合沒有因為刪除集合而跟著被移除，而且更糟的是子集合還存在資料庫裡面，如果沒有處理這一部分的話，存取資料庫的速度就會被這些幽靈資料所影響，而降低程式的執行速度。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={['content-blocks', active === 'blog' ? 'showx' : ''].join(' ')} id="blog">
            <section className="content">
              <div className="block-content">
                <h3 className="block-title">
                  Blog
                  <span>
                    <hr />
                  </span>
                </h3>
                <div className="row">
                  <div className="col-12">
                    <div className="post">
                      <div className="post-thumbnail">
                        <img src="./images/Restaurant.jpg" alt="thumbnail" />
                      </div>
                      <div className="post-title">
                        <h2>學習程式由模仿開始！</h2>
                      </div>
                      <div className="post-body">
                        <p>
                          凡事由模仿開始，不管是看官網文件或是參考網路上部落客的文章，此篇部落格分享自己是如何把別人
                          CodePen 作品的星星效果模仿，並應用在自己的網頁裡，這也是讓我一直不斷學習進步的方法之一。
                        </p>
                        <a
                          href="https://medium.com/@Eason_Lin/程式自學經驗分享-c4736a6aafd"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="more"
                        >
                          READ NOW
                        </a>
                      </div>
                    </div>
                    <div className="post">
                      <div className="post-thumbnail">
                        <img src="https://miro.medium.com/max/4368/0*NUg0SPFub8ZeimMd" alt="thumbnail" />
                      </div>
                      <div className="post-title">
                        <h2>UI / UX 初體驗</h2>
                      </div>
                      <div className="post-body">
                        <p>
                          前端工程師是人文藝術與電腦科技結合一身的藝術家，除了程式的邏輯，如果能了解一點 UI / UX
                          設計的理念，就能與設計師減少溝通障礙，增進使用者對產品的體驗；此篇部落格為自己學習 UI / UX
                          的心得與收穫分享。
                        </p>
                        <a
                          href="https://medium.com/@Eason_Lin/ui-ux%E5%88%9D%E9%AB%94%E9%A9%97-db8a91051324"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="more"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={['content-blocks', active === 'contact' ? 'showx' : ''].join(' ')} id="contact">
            <section className="content">
              <div className="block-content">
                <h3 className="block-title">
                  Get in touch
                  <span>
                    <hr />
                  </span>
                </h3>
                <div className="row">
                  <div className="col-12 text-center">
                    <img className="pic" src="./images/Eason-01.jpg" alt="Eason" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 col-md-4"></div>
                  <div className="col-5">
                    <div className="contact-content">
                      <div className="contact-icon">
                        <i className="ion-ios-telephone-outline"></i>
                      </div>
                      <div className="contact-details">
                        <h5>mobile</h5>
                        <p>
                          <a href="tel:+886922222476">(+886)922222476</a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-content">
                      <div className="contact-icon">
                        <i className="ion-ios-email-outline"></i>
                      </div>
                      <div className="contact-details">
                        <h5>email</h5>
                        <p>
                          <a href="mailto:leoling127@gmail.com?subject=Hi! Eason">leoling127@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-content">
                      <div className="contact-icon">
                        <a href="https://github.com/Eason0in?tab=repositories" target="_blank">
                          <i className="ion-social-github"></i>
                        </a>
                      </div>
                      <div className="contact-icon">
                        <a href="https://www.linkedin.com/in/eason-lin-0" target="_blank">
                          <i className="ion-social-linkedin"></i>
                        </a>
                      </div>
                      <div className="contact-icon">
                        <a href="https://codepen.io/dashboard/" target="_blank">
                          <i className="ion-social-codepen"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
