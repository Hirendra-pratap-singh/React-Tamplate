import React from 'react'

export default function Dashboard(props) {
  return (
    <>


      <div role="main" id="main" className="container_12 clearfix">
        <section className="toolbar">
          <div className="user">
            <div className="avatar"> <img src="img/layout/content/toolbar/user/avatar.png" /> <span>3</span> </div>
            <span>Administrator</span>
            <ul>
              <li><a href="#">Settings</a></li>
              <li><a href="pages_profile.html">Profile</a></li>
              <li className="line" />
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
          <ul className="shortcuts">
            <li> <a href="#"><span className="icon i24_user-business" /></a>
              <div className="small">
                <h3>Create a User</h3> <button className="button flat left grey" onClick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Close</button>
                <button className="button flat right" onClick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Create</button>
                <div className="content">
                  <form className="full grid">
                    <div className="row no-bg">
                      <p className="_100 small"> <label htmlFor="p1_username">Username</label> <input type="text" name="p1_username" id="p1_username" /> </p>
                    </div>
                    <div className="row no-bg">
                      <p className="_50 small"> <label htmlFor="p1_firstname">Firstname</label> <input type="text" name="p1_firstname" id="p1_firstname" /> </p>
                      <p className="_50 small"> <label htmlFor="p1_lastname">Lastname</label> <input type="text" name="p1_lastname" id="p1_lastname" /> </p>
                    </div>
                  </form>
                </div>
              </div>
            </li>
            <li> <a href="#"><span className="icon i24_inbox-document" /></a>
              <div className="small">
                <h3>Write a Message</h3> <button className="button flat left grey" onClick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Close</button>
                <button className="button flat right" onClick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Send</button>
                <div className="content">
                  <form className="full grid">
                    <div className="row no-bg">
                      <p className="_100 small"> <input type="text" name="p2_recipient" id="p2_recipient" placeholder="Recipient" /> </p>
                      <p className="_100 small"> <input type="text" name="p2_subject" id="p2_subject" placeholder="Subject" /> </p>
                      <p className="_100 small"> <textarea rows={5} style={{ overflow: 'hidden', height: 45, width: '100%', WebkitBoxSizing: 'border-box', MozBoxSizing: 'border-box', msBoxSizing: 'border-box', boxSizing: 'border-box' }} name="p2_message" id="p2_message" placeholder="Message" defaultValue={""} /> </p>
                    </div>
                  </form>
                </div>
              </div>
            </li>
            <li> <a href="#"><span className="icon i24_application-blue" /></a>
              <div className="small">
                <h3>Information</h3> <button className="button flat left grey" onClick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Close</button>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
              </div>
            </li>
          </ul> <input type="search" data-source="extras/search.php" placeholder="Search..." autoComplete="off" className="tooltip" title="e.g. Peach" data-gravity="s" />
        </section>
        <aside>
          <div className="top">
            <nav>
              <ul className="collapsible accordion">
                <li className="current"><a href="dashboard.html"><img src="img/icons/packs/fugue/16x16/dashboard.png" true height={16} width={16} />Dashboard</a></li>
                <li> <a href="#"><img src="img/icons/packs/fugue/16x16/ui-layered-pane.png" true height={16} width={16} />UI Widgets<span className="badge">4</span></a>
                  <ul>
                    <li><a href="ui_general.html"><span className="icon icon-list" />General</a></li>
                    <li><a href="ui_extras.html"><span className="icon icon-cog" />Extras</a></li>
                    <li><a href="ui_icons.html"><span className="icon icon-picture" />Icons</a></li>
                    <li><a href="ui_grid.html"><span className="icon icon-th" />Grid</a></li>
                  </ul>
                </li>
                <li> <a href="#"><img src="img/icons/packs/fugue/16x16/application-form.png" true height={16} width={16} />Form Elements</a>
                  <ul>
                    <li><a href="forms.html"><span className="icon icon-list-true" />General</a></li>
                    <li><a href="forms_validation.html"><span className="icon icon-warning-sign" />Validation</a></li>
                    <li><a href="forms_extras.html"><span className="icon icon-magic" />Fileuploader &amp;
                      Wizard</a></li>
                  </ul>
                </li>
                <li> <a href="#"><img src="img/icons/packs/fugue/16x16/chart.png" true height={16} width={16} />Statistics / Charts<span className="badge">2</span></a>
                  <ul>
                    <li><a href="statistics.html"><span className="icon icon-sitemap" />Statistics
                      Elements</a></li>
                    <li><a href="charts.html"><span className="icon icon-bar-chart" />Charts</a></li>
                  </ul>
                </li>
                <li> <a href="#"><img src="img/icons/packs/fugue/16x16/table.png" true height={16} width={16} />Tables</a>
                  <ul>
                    <li><a href="tables_static.html"><span className="icon icon-check-empty" />Static</a>
                    </li>
                    <li><a href="tables_dynamic.html"><span className="icon icon-table" />Dynamic</a></li>
                    <li><a href="tables_full.html"><span className="icon icon-fullscreen" />Full</a></li>
                  </ul>
                </li>
                <li> <a href="#"><img src="img/icons/packs/fugue/16x16/document-horizontal.png" true height={16} width={16} />Other Pages</a>
                  <ul>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="pages_profile.html">Profile</a></li>
                    <li><a href="pages_invoice.html">Invoice<span className="badge grey">1 open</span></a></li>
                    <li><a href="pages_faq.html">FAQ</a></li>
                    <li><a href="pages_search.html">Search</a></li>
                    <li><a href="pages_error_404.html">Error Page (404)</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bottom sticky">
            <div className="divider" />
            <div className="progress">
              <div className="bar" data-title="Space" data-value={1285} data-max={5120} data-format="0,0 MB" />
              <div className="bar" data-title="Traffic" data-value="8.61" data-max={14} data-format="0.00 GB" />
              <div className="bar" data-title="Budget" data-value={20000} data-max={20000} data-format="$0,0" />
            </div>
            <div className="divider" />
            <div className="buttons"> <a href="#" className="button grey open-add-client-dialog">Add New
              Client</a> <a href="#" className="button grey open-add-client-dialog">Open a
                Ticket</a> </div>
          </div>
        </aside>
        <section id="content" className="container_12 clearfix" data-sort="true">
          <ul className="stats not-on-phone">
            <li> <strong>61263</strong> <small>Total Visits</small> <span className="green">+26%</span> </li>
            <li> <strong>23</strong> <small>Orders</small> <span className="green">+16%</span> </li>
            <li> <strong>$2165.57</strong> <small>Total Volume</small> <span className="red">-8%</span> </li>
            <li> <strong>0</strong> <small>Overdue Tickets</small> <span>0%</span> </li>
            <li> <strong>7</strong> <small>Reported Bugs</small> <span className="red">+17%</span> </li>
          </ul>
          <h1 className="grid_12 margin-top no-margin-top-phone">Dashboard</h1> {/*[if gt IE 8]><!*/}
          <div className="grid_12 center-elements">
            <div className="full-stats">
              <div className="stat minichart" data-total={16525} data-values="[4,6,7,7,4,3,2,1,4]" data-title="Visits" data-format="+0,0;-0,0" data-change={22} />
            </div>
            <div className="full-stats">
              <div className="stat minichart" data-total={-17} data-values="[2,5,8,7,3,0,-1,-2,-4]" data-title="Users" data-format="+0,0;-0,0" data-change={-6} />
            </div>
            <div className="full-stats">
              <div className="stat minichart" data-total={0} data-values="[0,0,0,1,2,1,-2,-2,-1]" data-title="Orders" data-change={0} />
            </div>
          </div> {/*<![endif]*/}
          <div className="grid_12">
            <div className="box">
              <div className="header">
                <h2><img className="icon" src="img/icons/packs/fugue/16x16/chart-up-color.png" />Charts</h2> <a href="#" className="menu icon-cog" />
                <menu> <a href="#" className="open-add-client-dialog"><span className="icon icon-plus" />Add Client</a> <a href="#">
                  <div className="icon icon-pencil" />Edit
                </a> <a href="#">
                    <div className="icon icon-remove" />Remove
                  </a> </menu>
              </div>
              <div className="content" style={{ height: 250 }}>
                <table className="chart">
                  <thead>
                    <tr>
                      <th />
                      <th>Label 1</th>
                      <th>Label 2</th>
                      <th>Label 3</th>
                      <th>Label 4</th>
                      <th>Label 5</th>
                      <th>Label 6</th>
                      <th>Label 7</th>
                      <th>Label 8</th>
                      <th>Label 9</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>First Label</th>
                      <td>48</td>
                      <td>125</td>
                      <td>159</td>
                      <td>147</td>
                      <td>154</td>
                      <td>114</td>
                      <td>163</td>
                      <td>122</td>
                      <td>96</td>
                    </tr>
                    <tr>
                      <th>Second Label</th>
                      <td>8</td>
                      <td>27</td>
                      <td>0</td>
                      <td>79</td>
                      <td>47</td>
                      <td>59</td>
                      <td>80</td>
                      <td>30</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <th>Third Label</th>
                      <td>28</td>
                      <td>56</td>
                      <td>98</td>
                      <td>112</td>
                      <td>87</td>
                      <td>26</td>
                      <td>38</td>
                      <td>110</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <th>Fourth Label</th>
                      <td>38</td>
                      <td>43</td>
                      <td>69</td>
                      <td>54</td>
                      <td>16</td>
                      <td>16</td>
                      <td>202</td>
                      <td>20</td>
                      <td>73</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="grid_6">
            <div className="box">
              <div className="header">
                <h2><img className="icon" src="img/icons/packs/fugue/16x16/receipt-invoice.png" />Invoices statistics
                </h2>
              </div>
              <div className="content">
                <div className="spacer" />
                <div className="full-stats">
                  <div className="stat hlist" data-list="[{&quot;val&quot;:17621,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;already paid&quot;,&quot;color&quot;:&quot;green&quot;},{&quot;val&quot;:1125,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;not paid yet&quot;,&quot;color&quot;:&quot;red&quot;},{&quot;val&quot;:18746,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;total taxes&quot;}]" data-flexiwidth="true" />
                </div>
                <div className="clearfix" />
                <div className="ui-progressbar" data-value={90} data-showtitle="percentage" data-color="blue" data-showvalue="true" />
              </div>
              <div className="actions">
                <div className="left"> <a href="#" className="button grey">Print invoices</a> </div>
                <div className="right"> <a href="#" className="button">Generate report</a> </div>
              </div>
            </div>
            <form className="box validate">
              <div className="header">
                <h2><img className="icon" src="img/icons/packs/fugue/16x16/newspaper.png" />Messages</h2>
              </div>
              <div className="content">
                <div className="spacer" />
                <div className="messages full chat">
                  <div className="msg reply"> <img src="img/icons/packs/iconsweets2/25x25/user-2.png" />
                    <div className="content">
                      <h3><a href="pages_profile.html">John Doe</a> <span>says:</span><small>3 hours
                        ago</small></h3>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                  </div>
                  <div className="msg"> <img src="img/icons/packs/iconsweets2/25x25/user-2.png" />
                    <div className="content">
                      <h3><a href="pages_profile.html">Peter Doe</a> <span>says:</span><small>5 hours
                        ago</small></h3>
                      <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="actions">
                <div className="left"> <label htmlFor="fb_pin" className="inline">Message to John Doe:</label> <input type="text" className="required" name="fb_pin" id="fb_pin" /> </div>
                <div className="right"> <input type="reset" defaultValue="Cancel" className="grey" /> <input type="submit" defaultValue="Send" name="send" /> </div>
              </div>
            </form>
          </div>
          <div className="grid_6">
            <div className="box">
              <div className="header">
                <h2><img className="icon" src="img/icons/packs/fugue/16x16/calendar-select.png" />Calendar</h2>
              </div>
              <div className="content calendar demo" />
            </div>
          </div>
          <div className="grid_12">
            <div className="box">
              <div className="header">
                <h2><img className="icon" src="img/icons/packs/fugue/16x16/table.png" />Table</h2>
              </div>
              <div className="content">
                <div className="tabletools">
                  <div className="left"> <a className="open-add-client-dialog" href="#"><i className="icon-plus" />New Client</a> </div>
                  <div className="right"> </div>
                </div>
                <table className="dynamic styled" data-table-tools="{&quot;display&quot;:true}">
                  <thead>
                    <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="gradeX">
                      <td>Trident</td>
                      <td>Internet Explorer 4.0</td>
                      <td>Win 95+</td>
                      <td className="center">4</td>
                      <td className="center">X</td>
                    </tr>
                    <tr className="gradeC">
                      <td>Trident</td>
                      <td>Internet Explorer 5.0</td>
                      <td>Win 95+</td>
                      <td className="center">5</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 5.5</td>
                      <td>Win 95+</td>
                      <td className="center">5.5</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 6</td>
                      <td>Win 98+</td>
                      <td className="center">6</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 7</td>
                      <td>Win XP SP2+</td>
                      <td className="center">7</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Trident</td>
                      <td>AOL browser (AOL desktop)</td>
                      <td>Win XP</td>
                      <td className="center">6</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 1.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.7</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 1.5</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 2.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 3.0</td>
                      <td>Win 2k+ / OSX.3+</td>
                      <td className="center">1.9</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Camino 1.0</td>
                      <td>OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>






  )
}
