import{_ as n,g as s}from"./app.7a79b439.js";var a="/Lin/cluster/HA1.png",e="/Lin/cluster/HA2.png";const p={},r=s(`<h2 id="\u57FA\u7840\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u73AF\u5883" aria-hidden="true">#</a> \u57FA\u7840\u73AF\u5883\uFF1A</h2><p>1\u3001\u5B89\u88C5PCS\u670D\u52A1</p><ul><li>\u68C0\u67E5pcs\u73AF\u5883\uFF01</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@cluster3 ~<span class="token punctuation">]</span><span class="token comment"># pcs</span>

Usage: pcs <span class="token punctuation">[</span>-f file<span class="token punctuation">]</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>commands<span class="token punctuation">]</span><span class="token punctuation">..</span>.
Control and configure pacemaker and corosync.

Options:
    -h, --help         Display usage and exit.
    -f <span class="token function">file</span>            Perform actions on <span class="token function">file</span> instead of active CIB.
                       Commands supporting the option use the initial state of
                       the specified <span class="token function">file</span> as their input and <span class="token keyword">then</span> overwrite the
                       <span class="token function">file</span> with the state reflecting the requested
<span class="token punctuation">..</span>.

Commands:
    cluster     Configure cluster options and nodes.
    resource    Manage cluster resources.
    stonith     Manage fence devices.
    constraint  Manage resource constraints.
    property    Manage pacemaker properties.
<span class="token punctuation">..</span>.

<span class="token punctuation">[</span>root@cluster3 ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa |grep pace</span>
pacemaker-schemas-2.0.5-9.el8_4.3.noarch
pacemaker-libs-2.0.5-9.el8_4.3.x86_64
userspace-rcu-0.10.1-2.el8.x86_64
pacemaker-cli-2.0.5-9.el8_4.3.x86_64
pacemaker-2.0.5-9.el8_4.3.x86_64
pacemaker-cluster-libs-2.0.5-9.el8_4.3.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u6CA1\u6709\u95EE\u9898\uFF01<br> 2\u3001\u8282\u70B9\u4E4B\u95F4\u7684\u901A\u4FE1\uFF1A</p><ul><li>\u514D\u5BC6\u7801\u767B\u5F55</li><li>\u5341\u5206\u53EF\u4EE5Ping</li><li>Selinux</li></ul><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@cluster3 ~<span class="token punctuation">]</span><span class="token comment"># pcs status </span>
Cluster name: lincluster
Cluster Summary:
  * Stack: corosync
  * Current DC: cluster3 <span class="token punctuation">(</span>version <span class="token number">2.0</span>.5-9.el8_4.3-ba59be7122<span class="token punctuation">)</span> - partition with quorum
  * Last updated: Thu Dec <span class="token number">16</span> 05:32:02 <span class="token number">2021</span>
  * Last change:  Thu Dec <span class="token number">16</span> 05:28:44 <span class="token number">2021</span> by root via cibadmin on cluster3
  * <span class="token number">2</span> nodes configured
  * <span class="token number">3</span> resource instances configured

Node List:
  * Node cluster4: standby
  * Online: <span class="token punctuation">[</span> cluster3 <span class="token punctuation">]</span>

Full List of Resources:
  * Resource Group: apache:
    * site      <span class="token punctuation">(</span>ocf::heartbeat:Filesystem<span class="token punctuation">)</span>:     Started cluster3
    * vip       <span class="token punctuation">(</span>ocf::heartbeat:IPaddr2<span class="token punctuation">)</span>:        Started cluster3
    * webstatus <span class="token punctuation">(</span>ocf::heartbeat:apache<span class="token punctuation">)</span>:         Stopped

Failed Resource Actions:
  * webstatus_start_0 on cluster3 <span class="token string">&#39;error&#39;</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>: <span class="token assign-left variable">call</span><span class="token operator">=</span><span class="token number">18</span>, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token string">&#39;Timed Out&#39;</span>, <span class="token assign-left variable">exitreason</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>, last-rc-change<span class="token operator">=</span><span class="token string">&#39;2021-12-16 05:31:14 +08:00&#39;</span>, <span class="token assign-left variable">queued</span><span class="token operator">=</span>0ms, <span class="token assign-left variable">exec</span><span class="token operator">=</span>40002ms

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
<span class="token punctuation">[</span>root@cluster3 ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@cluster3 ~<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens3: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc fq_codel state UP group default qlen <span class="token number">1000</span>
    link/ether fa:16:3e:52:84:24 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.10</span>.70.113/24 brd <span class="token number">10.10</span>.70.255 scope global noprefixroute ens3
       valid_lft forever preferred_lft forever
    inet <span class="token number">10.10</span>.70.90/24 brd <span class="token number">10.10</span>.70.255 scope global secondary ens3
       valid_lft forever preferred_lft forever
    inet6 fe80::e5ec:19e4:b5ac:43e2/64 scope <span class="token function">link</span> dadfailed tentative noprefixroute 
       valid_lft forever preferred_lft forever
    inet6 fe80::226d:9cd6:fbb8:64fc/64 scope <span class="token function">link</span> dadfailed tentative noprefixroute 
       valid_lft forever preferred_lft forever
    inet6 fe80::692b:7d43:f2f7:cc30/64 scope <span class="token function">link</span> dadfailed tentative noprefixroute 
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: ens4: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc fq_codel state UP group default qlen <span class="token number">1000</span>
    link/ether fa:16:3e:e9:43:2b brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.10</span>.80.113/24 brd <span class="token number">10.10</span>.80.255 scope global dynamic noprefixroute ens4
       valid_lft 83499sec preferred_lft 83499sec
    inet6 fe80::81ed:e7c9:8e80:406/64 scope <span class="token function">link</span> noprefixroute 
       valid_lft forever preferred_lft forever
<span class="token punctuation">[</span>root@cluster3 ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><strong>Ping\u6D4B\u8BD5</strong><img src="`+a+'" alt="ping" loading="lazy"></p><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p><img src="'+e+'" alt="Ces" loading="lazy"></p>',12);function l(t,c){return r}var i=n(p,[["render",l]]);export{i as default};
