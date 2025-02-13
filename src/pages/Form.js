import React from 'react'

export default function Form() {
  return (
    <>

      <div>
        <div id="loading-overlay" />
        <div id="loading"> <span>Loading...</span> </div>
        <div id="lock-screen" title="Screen Locked"> <a href="login.html" className="header right button grey flat">Logout</a>
          <p>Due to the inactivity of this session, your account was temporarily locked.</p>
          <p>To unlock your account, simply slide the button and enter your password.</p>
          <div className="actions">
            <div id="slide_to_unlock"> <img src="img/elements/slide-unlock/lock-slider.png" true="slide me" /> <span>slide
              to unlock</span> </div>
            <form action="#" method="GET"> <input type="password" name="pwd" id="pwd" placeholder="Enter your password here..." autoCorrect="off" autoCapitalize="off" /> <input type="submit" name="send" defaultValue="Unlock" disabled /> <input type="reset" defaultValue="X" /> </form>
          </div>
        </div>
        <div id="settings" className="settings-content" data-width={450}>
          <ul className="tabs center-elements">
            <li><a href="#settings-1"><img src="img/icons/packs/fugue/24x24/user-business.png" true /><span>Account
              Settings</span></a></li>
            <li><a href="#settings-2"><img src="img/icons/packs/fugue/24x24/balloon.png" true /><span>Notifications</span></a></li>
            <li><a href="#settings-3"><img src="img/icons/packs/fugue/24x24/credit-card.png" true /><span>Invoicing</span></a></li>
          </ul>
          <div className="change_password">
            <form action="#" method="GET" className="validate" id="settings_password">
              <p> <label htmlFor="settings-password">New Password:</label> <input type="password" id="settings-password" className="required strongpw small password meter" /> </p>
            </form>
            <div className="actions">
              <div className="right"> <input form="settings_password" type="reset" defaultValue="Cancel" className="grey" /> <input form="settings_password" type="submit" defaultValue="OK" /> </div>
            </div>
          </div>
          <div className="content">
            <div id="settings-1">
              <form action="#" method="GET">
                <p> <label htmlFor="settings-name">Name:</label> <input type="text/html" id="settings-name" className="medium" />
                </p>
                <p> <label htmlFor="settings-descr">Descripton:</label> <input type="text/html" id="settings-descr" className="medium" /> </p>
                <p className="divider" />
                <p> <label htmlFor="settings-pw">Password: </label> <input className="grey change_password_button" type="button" id="settings-pw" defaultValue="Change Password..." data-lang-changed="Password changed" /> </p>
              </form>
            </div>
            <div id="settings-2"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <form action="#" method="GET">
                <div className="spacer" />
                <p className="divider" />
                <div className="spacer" />
                <p> <label htmlFor="settings-email">Email Address:</label> <input type="text/html" id="settings-email" className="medium" /> </p>
                <p> <label htmlFor="settings-interval">Interval: </label> <select name="settings-interval" id="settings-interval" data-placeholder="Choose an Interval">
                  <option value />
                  <option value="Never">Never</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select> </p>
              </form>
            </div>
            <div id="settings-3">
              <form action="#" method="GET">
                <p> <label htmlFor="settings-card-number">Card number:</label> <input type="text/html" id="settings-card-number" className="medium" /> </p>
                <p> <label htmlFor="settings-cvv">CVV:</label> <input type="text/html" id="settings-cvv" className="medium" />
                </p>
                <p> <label htmlFor="settings-expiration">Expiration: </label> <select sname="settings-expiration" id="settings-expiration" data-placeholder="Choose an Expiration">
                  <option value />
                  <option value={2012}>2012</option>
                  <option value={2013}>2013</option>
                  <option value={2014}>2014</option>
                  <option value={2015}>2015</option>
                </select> </p>
              </form>
            </div>
          </div>
          <div className="actions">
            <div className="left"> <button className="grey cancel">Cancel</button> </div>
            <div className="right"> <button className="save">Save</button> <button className="hide saving" disabled>Saving...</button> </div>
          </div>
        </div>
        <div style={{ display: 'none' }} id="dialog_add_client" title="Add Client Example Dialog">
          <form action="#" className="full validate">
            <div className="row"> <label htmlFor="d2_username"> <strong>Username</strong> </label>
              <div> <input className="required" type="text/html" name="d2_username" id="d2_username" /> </div>
            </div>
            <div className="row"> <label htmlFor="d2_email"> <strong>Email Address</strong> </label>
              <div> <input className="required" type="text/html" name="d2_email" id="d2_email" /> </div>
            </div>
            <div className="row"> <label htmlFor="d2_role"> <strong>Role</strong> </label>
              <div> <select style={{ paddingBottom: 10 }} name="d2_role" id="d2_role" className="search required" data-placeholder="Choose a Role">
                <option value />
                <option value="Applicant">Applicant</option>
                <option value="Member">Member</option>
                <option value="Moderator">Moderator</option>
                <option value="Administrator">Administrator</option>
              </select> </div>
            </div>
          </form>
          <div className="actions">
            <div className="left"> <button className="grey cancel">Cancel</button> </div>
            <div className="right"> <button className="submit">Add User</button> </div>
          </div>
        </div>
        <div style={{ display: 'none' }} id="dialog_message" title="Conversation: John Doe">
          <div className="spacer" />
          <div className="messages full chat">
            <div className="msg reply"> <img src="img/icons/packs/iconsweets2/25x25/user-2.png" />
              <div className="content">
                <h3><a href="pages_profile.html">John Doe</a> <span>says:</span><small>3 hours ago</small></h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                  ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              </div>
            </div>
            <div className="msg"> <img src="img/icons/packs/iconsweets2/25x25/user-2.png" />
              <div className="content">
                <h3><a href="pages_profile.html">Peter Doe</a> <span>says:</span><small>5 hours ago</small></h3>
                <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="actions">
            <div className="left"> <input style={{ width: 330 }} type="text/html" name="d3_message" id="d3_message" placeholder="Type your message..." /> </div>
            <div className="right"> <button>Send</button> <button className="grey">Cancel</button> </div>
          </div>
        </div>
        <section id="toolbar">
          <div className="container_12">
            <div className="left">
              <ul className="breadcrumb">
                <li><a href="dashboard.html">Mango</a></li>
                <li><a href="#">Form Elements</a></li>
                <li><a href="#">General</a></li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li><a href="pages_profile.html"><span className="icon i14_admin-user" />Profile</a></li>
                <li> <a href="#"><span>3</span>Messages</a>
                  <div className="popup">
                    <h3>New Messages</h3> <a className="button flat left grey" onClick="$(this).parent().fadeToggle($$.config.fxSpeed)">Close</a> <a className="button flat right" href="tables_dynamic.html">Inbox</a>
                    <div className="content mail">
                      <ul>
                        <li>
                          <div className="avatar"> <img src="img/elements/mail/avatar.png" height={40} width={40} /> </div>
                          <div className="info"> <strong>John Doe</strong> <span>Thanks for your theme!</span>
                            <small>09:32 am</small>
                          </div>
                          <div className="text">
                            <p>Hey Admin!</p>
                            <p>I've purchased your admin template and it's great :)</p>
                            <p>A happy customer</p>
                            <div className="actions"> <a href="#" className="left open-message-dialog">Reply</a> <a onClick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="#">Delete</a> </div>
                          </div>
                        </li>
                        <li>
                          <div className="avatar"> <img src="img/elements/mail/mail.png" height={40} width={40} />
                          </div>
                          <div className="info"> <strong>System</strong> <span>New comment</span> <small>08:47
                            am</small> </div>
                          <div className="text">
                            <p>Hello,</p>
                            <p>There is one new comment on your theme.</p>
                            <p>Go to Comments page to see it.</p>
                            <div className="actions"> <a href="#" className="left open-message-dialog">Reply</a> <a onClick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="#">Delete</a> </div>
                          </div>
                        </li>
                        <li>
                          <div className="avatar"> <img src="img/elements/mail/mail.png" height={40} width={40} />
                          </div>
                          <div className="info"> <strong>Stranger</strong> <span>[SPAM] ---</span>
                            <small>Yesterday</small>
                          </div>
                          <div className="text">
                            <p>[...]</p>
                            <div className="actions"> <a href="#" className="left open-message-dialog">Read</a> <a onClick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="#">Delete</a> </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="space" />
                <li><a href="#" id="btn-lock"><span>--:--</span>Lock screen</a></li>
                <li className="red"><a href="login.html">Logout</a></li>
              </ul>
            </div>
            <div className="phone">
              <li><a href="pages_profile.html"><span className="icon icon-user" /></a></li>
              <li><a className="navigation" href="#"><span className="icon icon-list" /></a></li>
            </div>
          </div>
        </section>
        <header className="container_12"> <a href="dashboard.html"><img src="assets/img/logo.png" true="Mango" width={191} height={60} /></a> <a className="phone-title" href="dashboard.html"><img src="img/logo-mobile.png" true="Mango" height={22} width={70} /></a>
          <div className="buttons"> <a href="statistics.html"> <span className="icon icon-sitemap" /> Statistics </a> <a href="forms.html"> <span className="icon icon-list-true" /> Forms </a> <a href="tables_dynamic.html">
            <span className="icon icon-table" /> Tables </a> </div>
        </header>
        <div role="main" id="main" className="container_12 clearfix">
          <section className="toolbar">
            <div className="user">
              <div className="avatar"> <img src="assets/img/layout/content/toolbar/user/avatar.png" /> <span>3</span> </div>
              <span>Administrator</span>
              <ul>
                <li><a href="#">Settings</a></li>
                <li><a href="pages_profile.html">Profile</a></li>
                <li className="line" />
                <li><a href="login.html">Logout</a></li>
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
                        <p className="_100 small"> <label htmlFor="p1_username">Username</label> <input type="text/html" name="p1_username" id="p1_username" /> </p>
                      </div>
                      <div className="row no-bg">
                        <p className="_50 small"> <label htmlFor="p1_firstname">Firstname</label> <input type="text/html" name="p1_firstname" id="p1_firstname" /> </p>
                        <p className="_50 small"> <label htmlFor="p1_lastname">Lastname</label> <input type="text/html" name="p1_lastname" id="p1_lastname" /> </p>
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
                        <p className="_100 small"> <input type="text/html" name="p2_recipient" id="p2_recipient" placeholder="Recipient" /> </p>
                        <p className="_100 small"> <input type="text/html" name="p2_subject" id="p2_subject" placeholder="Subject" /> </p>
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
                  <li><a href="dashboard.html"><img src="img/icons/packs/fugue/16x16/dashboard.png" true height={16} width={16} />Dashboard</a></li>
                  <li> <a href="#"><img src="img/icons/packs/fugue/16x16/ui-layered-pane.png" true height={16} width={16} />UI Widgets<span className="badge">4</span></a>
                    <ul>
                      <li><a href="ui_general.html"><span className="icon icon-list" />General</a></li>
                      <li><a href="ui_extras.html"><span className="icon icon-cog" />Extras</a></li>
                      <li><a href="ui_icons.html"><span className="icon icon-picture" />Icons</a></li>
                      <li><a href="ui_grid.html"><span className="icon icon-th" />Grid</a></li>
                    </ul>
                  </li>
                  <li> <a className="open" href="#"><img src="img/icons/packs/fugue/16x16/application-form.png" true height={16} width={16} />Form Elements</a>
                    <ul>
                      <li className="current"><a href="forms.html"><span className="icon icon-list-true" />General</a></li>
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
          <section id="content" className="container_12 clearfix" data-sort="true"> ﻿ <h1 className="grid_12">Form Elements</h1>
            <form action="#" className="grid_12">
              <fieldset>
                <legend>Input Fields</legend>
                <div className="row"> <label htmlFor="f1_normal_input"> <strong>Normal Input Field</strong> </label>
                  <div> <input type="text/html" name="f1_normal_input" id="f1_normal_input" /> </div>
                </div>
                <div className="row"> <label htmlFor="f1_password"> <strong>Password Field</strong> <small>with
                  tooltip</small> </label>
                  <div> <input type="password" className="tooltip" data-gravity="n" title="Please use a secure password!" name="f1_password" id="f1_password" /> </div>
                </div>
                <div className="row"> <label htmlFor="f1_placeholder"> <strong>With Placeholder</strong> </label>
                  <div> <input type="text/html" placeholder="Hey, this is a placeholder!" name="f1_placeholder" id="f1_placeholder" /> </div>
                </div>
                <div className="row"> <label htmlFor="f1_disabled"> <strong>Disabled Field</strong> </label>
                  <div> <input type="text/html" disabled name="f1_disabled" id="f1_disabled" /> </div>
                </div>
                <div className="row"> <label htmlFor="f1_value"> <strong>Predefined value</strong> </label>
                  <div> <input type="text/html" defaultValue="http://" name="f1_value" id="f1_value" /> </div>
                </div>
                <div className="row"> <label htmlFor="f1_textarea"> <strong>Textarea</strong> </label>
                  <div> <textarea className="nogrow" rows={5} name="f1_textarea" id="f1_textarea" defaultValue={""} /> </div>
                </div>
                <div className="row"> <label htmlFor="f1_textarea_grow"> <strong>Textarea</strong> <small>with
                  autogrow</small> </label>
                  <div> <textarea rows={5} name="f1_textarea_grow" id="f1_textarea_grow" defaultValue={""} /> </div>
                </div>
                <div className="row not-on-phone"> <label htmlFor="f1_wysiwyg"> <strong>WYSIWYG</strong> <small>(W)hat (y)ou
                  (s)ee (i)s (w)hat (y)ou (g)et</small> </label>
                  <div> <textarea className="editor" name="f1_wysiwyg" id="f1_wysiwyg" defaultValue={""} /> </div>
                </div>
              </fieldset>
              <fieldset className="not-on-phone">
                <legend>Select</legend>
                <div className="row"> <label htmlFor="f2_select1"> <strong>Select</strong> <small>With search</small>
                </label>
                  <div> <select name="f2_select1" id="f2_select1" className="search" data-placeholder="Choose a Name">
                    <option value />
                    <option value="Oliver">Oliver</option>
                    <option value="Jack">Jack</option>
                    <option value="Harry">Harry</option>
                    <option value="Alfie">Alfie</option>
                    <option value="Charlie">Charlie</option>
                    <option value="Thomas">Thomas</option>
                    <option value="William">William</option>
                    <option value="Joshua">Joshua</option>
                    <option value="George">George</option>
                    <option value="James">James</option>
                    <option value="Olivia">Olivia</option>
                    <option value="Sophie">Sophie</option>
                    <option value="Emily">Emily</option>
                    <option value="Lily">Lily</option>
                    <option value="Amelia">Amelia</option>
                    <option value="Jessica">Jessica</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Chloe">Chloe</option>
                    <option value="Grace">Grace</option>
                    <option value="Evie">Evie</option>
                  </select> </div>
                </div>
                <div className="row"> <label htmlFor="f2_select2"> <strong>Select</strong> <small>Without search</small>
                </label>
                  <div> <select name="f2_select2" id="f2_select2" data-placeholder="Choose a Name">
                    <option value="Oliver">Oliver</option>
                    <option value="Jack">Jack</option>
                    <option value="Grace">Grace</option>
                    <option value="Evie">Evie</option>
                  </select> </div>
                </div>
                <div className="row"> <label htmlFor="f2_tags"> <strong>Tags Select</strong> </label>
                  <div> <select name="f2_tags[]" id="f2_tags" data-placeholder="Choose a Name" multiple>
                    <option value="Oliver">Oliver</option>
                    <option value="Jack">Jack</option>
                    <option value="Harry">Harry</option>
                    <option value="Alfie">Alfie</option>
                    <option value="Charlie">Charlie</option>
                    <option value="Thomas">Thomas</option>
                    <option value="William">William</option>
                    <option value="Joshua">Joshua</option>
                    <option value="George">George</option>
                    <option value="James">James</option>
                    <option value="Olivia">Olivia</option>
                    <option value="Sophie">Sophie</option>
                    <option value="Emily">Emily</option>
                    <option value="Lily">Lily</option>
                    <option value="Amelia">Amelia</option>
                    <option value="Jessica">Jessica</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Chloe">Chloe</option>
                    <option value="Grace">Grace</option>
                    <option value="Evie">Evie</option>
                  </select> </div>
                </div>
                <div className="row"> <label htmlFor="f2_double"> <strong>Dual Select</strong> </label>
                  <div> <select multiple className="dualselects" data-size="small" id="f2_double" name="f2_double">
                    <option selected name="Austria">Austria</option>
                    <option name="Belgium">Belgium</option>
                    <option name="Bulgaria">Bulgaria</option>
                    <option name="Cyprus">Cyprus</option>
                    <option name="Czech Republic">Czech Republic</option>
                    <option name="Denmark">Denmark</option>
                    <option name="Estonia">Estonia</option>
                    <option name="Finland">Finland</option>
                    <option selected name="France">France</option>
                    <option selected name="Germany">Germany</option>
                    <option name="Greece">Greece</option>
                    <option name="Hungary">Hungary</option>
                    <option name="Ireland">Ireland</option>
                    <option name="Italy">Italy</option>
                    <option name="Latvia">Latvia</option>
                    <option name="Lithuania">Lithuania</option>
                    <option name="Luxembourg">Luxembourg</option>
                    <option name="Mtruea">Mtruea</option>
                    <option name="Netherlands">the Netherlands</option>
                    <option name="Poland">Poland</option>
                    <option name="Portugal">Portugal</option>
                    <option name="Romania">Romania</option>
                    <option name="Slovakia">Slovakia</option>
                    <option name="Slovenia">Slovenia</option>
                    <option name="Spain">Spain</option>
                    <option name="Sweden">Sweden</option>
                    <option selected name="United Kingdom">United Kingdom</option>
                  </select> </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Picker</legend>
                <div className="row"> <label htmlFor="f3_date"> <strong>Datepicker</strong> </label>
                  <div> <input type="date" name="f3_date" id="f3_date" /> </div>
                </div>
                <div className="row"> <label htmlFor="f3_time"> <strong>Timepicker</strong> </label>
                  <div> <input type="time" name="f3_time" id="f3_time" /> </div>
                </div>
                <div className="row"> <label htmlFor="f3_datepicker"> <strong>Date-/Timepicker</strong> </label>
                  <div> <input type="datetime" name="f3_datepicker" id="f3_datepicker" /> </div>
                </div>
                <div className="row not-on-phone"> <label htmlFor="f3_color"> <strong>Color-Picker</strong> </label>
                  <div>
                    <div> <input type="color" name="f3_color" id="f3_color" /> </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Checkboxes</legend>
                <div className="row"> <label> <strong>Simple Checkbox</strong> </label>
                  <div>
                    <div><input type="checkbox" name="f4_cb" id="f4_cb" /> <label htmlFor="f4_cb">Select it?</label>
                    </div>
                  </div>
                </div>
                <div className="row"> <label> <strong>Disabled Checkbox</strong> </label>
                  <div>
                    <div><input type="checkbox" disabled name="f4_cb_dis" id="f4_cb_dis" /><label htmlFor="f4_cb_dis">Select it?</label></div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Radio Buttons</legend>
                <div className="row"> <label> <strong>Radio Buttons</strong> </label>
                  <div>
                    <div><input type="radio" name="f4_rb" id="f4_rb1" defaultValue="Mastercard" /><label htmlFor="f4_rb1">Mastercard</label></div>
                    <div><input type="radio" name="f4_rb" id="f4_rb2" defaultValue="Visa" /><label htmlFor="f4_rb2">Visa</label></div>
                    <div><input type="radio" name="f4_rb" id="f4_rb3" defaultValue="AmericanExpress" /><label htmlFor="f4_rb3">American Express</label></div>
                  </div>
                </div>
                <div className="row"> <label> <strong>Disabled Radio Buttons</strong> </label>
                  <div>
                    <div><input type="radio" name="f4_rb_dis" id="f4_rb_dis1" disabled defaultValue="Mastercard" /><label htmlFor="f4_rb_dis1">Mastercard</label></div>
                    <div><input type="radio" name="f4_rb_dis" id="f4_rb_dis2" defaultChecked disabled defaultValue="onClick={()=>{}}" /><label htmlFor="f4_rb_dis2">Visa</label></div>
                    <div><input type="radio" name="f4_rb_dis" id="f4_rb_dis3" disabled defaultValue="AmericanExpress" /><label htmlFor="f4_rb_dis3">American Express</label></div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Slider</legend>
                <div className="row"> <label htmlFor="f5_slider"> <strong>Simple Slider</strong> </label>
                  <div> <input data-type="range" name="f5_slider" id="f5_slider" /> </div>
                </div>
                <div className="row"> <label htmlFor="f5_sliderrange"> <strong>Range Slider</strong> </label>
                  <div> <input data-type="range" data-range="[15,30]" name="f5_sliderrange" id="f5_sliderrange" />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Text-like Input</legend>
                <div className="row"> <label htmlFor="f6_complete"> <strong>Autocomplete</strong> <small>e.g.
                  "red"</small> </label>
                  <div> <input type="text/html" data-type="autocomplete" id="f6_complete" name="f6_complete" data-source="extras/autocomplete.html" /> </div>
                </div>
                <div className="row"> <label htmlFor="f6_pw"> <strong>Password Meter</strong> </label>
                  <div> <input type="password" className="meter strongpw" name="f6_pw" id="f6_pw" /> </div>
                </div>
                <div className="row"> <label htmlFor="f6_spinner"> <strong>Spinner</strong> </label>
                  <div> <input data-type="spinner" min={-20} max={20} defaultValue={1} id="f6_spinner" name="f6_spinner" /> </div>
                </div>
                <div className="row not-on-phone"> <label htmlFor="f6_file"> <strong>Upload</strong> </label>
                  <div> <input type="file" id="f6_file" name="f6_file" /> </div>
                </div>
              </fieldset>
              <fieldset className="not-on-phone">
                <legend>Inline Picker</legend>
                <div className="row"> <label htmlFor="f7_dateinline"> <strong>Inline Datepicker</strong> </label>
                  <div>
                    <div data-type="datetime" data-id="f7_dateinline" data-name="f7_dateinline" />
                  </div>
                </div>
                <div className="row"> <label htmlFor="f7_color_flat"> <strong>Inline-Picker</strong> <small>(flat
                  picker)</small> </label>
                  <div>
                    <div> <input type="color" className="flat" name="f7_color_flat" id="f7_color_flat" /> </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="grid_12">
              <form action="#" className="box">
                <div className="header">
                  <h2>Masked Inputs</h2>
                </div>
                <div className="content">
                  <div className="row"> <label htmlFor="f8_mi_date"> <strong>Date</strong> <small>99/99/9999</small>
                  </label>
                    <div> <input data-error-type="inline" className="maskDate" name="f8_mi_date" id="f8_mi_date" type="text/html" /> </div>
                  </div>
                  <div className="row"> <label htmlFor="f8_mi_phone"> <strong>Phone</strong> <small>(999) 999-9999</small>
                  </label>
                    <div> <input className="maskPhone" name="f8_mi_phone" id="f8_mi_phone" type="text/html" /> </div>
                  </div>
                  <div className="row"> <label htmlFor="f8_mi_intphone"> <strong>Int. Phone</strong> <small>+33 999 999
                    999</small> </label>
                    <div> <input className="maskIntPhone" name="f8_mi_intphone" id="f8_mi_intphone" type="text/html" /> </div>
                  </div>
                  <div className="row"> <label htmlFor="f8_mi_tin"> <strong>Tax ID</strong> <small>99-9999999</small>
                  </label>
                    <div> <input className="maskTin" name="f8_mi_tin" id="f8_mi_tin" type="text/html" /> </div>
                  </div>
                  <div className="row"> <label htmlFor="f8_mi_ssn"> <strong>SSN</strong> <small>999-99-9999</small>
                  </label>
                    <div> <input className="maskSsn" name="f8_mi_ssn" id="f8_mi_ssn" type="text/html" /> </div>
                  </div>
                  <div className="row"> <label htmlFor="f8_mi_prod"> <strong>Product Key</strong>
                    <small>a*-999-a999</small> </label>
                    <div> <input className="maskProd" name="f8_mi_prod" id="f8_mi_prod" type="text/html" /> </div>
                  </div>
                  <div className="row"> <label htmlFor="f8_mi_po"> <strong>Purchase Order</strong>
                    <small>aaa-999-***</small> </label>
                    <div> <input className="maskPo" name="f8_mi_po" id="f8_mi_po" type="text/html" /> </div>
                  </div>
                  <div className="row"> <label htmlFor="f8_mi_perc"> <strong>Percent</strong> <small>99%</small> </label>
                    <div> <input className="maskPct" name="f8_mi_perc" id="f8_mi_perc" type="text/html" /> </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="grid_12">
              <form action="#" className="box">
                <div className="header">
                  <h2>Rich Text Editor (WYSIWYG)</h2>
                </div>
                <div className="content"> <textarea className="editor full" defaultValue={""} /> </div>
              </form>
            </div>
            <div className="grid_4">
              <form className="box grid">
                <div className="header">
                  <h2>Full Width Grid</h2>
                </div>
                <div className="content">
                  <div className="row">
                    <p className="_100"> <input type="text/html" defaultValue="100%" /> </p>
                  </div>
                  <div className="row">
                    <p className="_50"> <input type="text/html" defaultValue="50%" /> </p>
                    <p className="_50"> <input type="text/html" defaultValue="50%" /> </p>
                  </div>
                  <div className="row">
                    <p className="_25"> <input type="text/html" defaultValue="25%" /> </p>
                    <p className="_75"> <input type="text/html" defaultValue="75%" /> </p>
                  </div>
                  <div className="row">
                    <p className="_75"> <input type="text/html" defaultValue="75%" /> </p>
                    <p className="_25"> <input type="text/html" defaultValue="25%" /> </p>
                  </div>
                  <div className="row">
                    <p className="_25"> <input type="text/html" defaultValue="25%" /> </p>
                    <p className="_25"> <input type="text/html" defaultValue="25%" /> </p>
                    <p className="_25"> <input type="text/html" defaultValue="25%" /> </p>
                    <p className="_25"> <input type="text/html" defaultValue="25%" /> </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="grid_4">
              <form className="box grid">
                <div className="header">
                  <h2>Full Width Grid with Label</h2>
                </div>
                <div className="content">
                  <div className="row">
                    <p className="_100"> <label>100%</label> <input type="text/html" /> </p>
                  </div>
                  <div className="row">
                    <p className="_50"> <label>50%</label> <input type="text/html" /> </p>
                    <p className="_50"> <label>50%</label> <input type="text/html" /> </p>
                  </div>
                  <div className="row">
                    <p className="_25"> <label>25%</label> <input type="text/html" /> </p>
                    <p className="_25"> <label>25%</label> <input type="text/html" /> </p>
                    <p className="_25"> <label>25%</label> <input type="text/html" /> </p>
                    <p className="_25"> <label>25%</label> <input type="text/html" /> </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="grid_4">
              <form method="post" action="#" className="box validate">
                <div className="header">
                  <h2>Full Width Grid with Inline Label</h2>
                </div>
                <div className="content">
                  <p className="_100 small" style={{ paddingTop: 10 }}> <label htmlFor="f9_ban" className="inline">Bank Account
                    Number:</label> <input data-error-type="inline" type="text/html" className="required" name="f9_ban" id="f9_ban" pattern="^\d{1,10}$" /> </p>
                  <p className="_100 small"> <label htmlFor="f9_name" className="inline">Name:</label> <input data-error-type="inline" type="text/html" className="required" name="f9_name" id="f9_name" /> </p>
                  <p className="_100 small" style={{ paddingBottom: 10 }}> <label htmlFor="f9_pin" className="inline">PIN:</label> <input data-error-type="inline" type="password" className="required" name="f9_pin" id="f9_pin" /> </p>
                </div>
                <div className="actions">
                  <div className="left"> <input type="reset" defaultValue="Cancel" /> </div>
                  <div className="right"> <input type="submit" defaultValue="Send" name="send" /> </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>




    </>
  )
}
