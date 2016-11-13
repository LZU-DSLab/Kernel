---
layout: page
title: 关于我们
permalink: /about/
---

兰州大学 DSLab Linux小组，专注于 Linux 内核学习与研究

Address:Tianshui South Road 222,Lanzhou,P.R.China

Tel:+86-931-8912025

Fax:+86-931-8912025 Zip Code:730000

Email:[zhouqg@lzu.edu.cn](mailto:zhouqg@lzu.edu.cn)

### 写作说明

1. 克隆此仓库
        
        git clone https://github.com/LZU-DSLab/kernel.git 
       
2. 执行 `data/new-post` 脚本，生成 Markdown 文件，**file name 必须为英文字符**

        cd kernel
        data/new-post "post title" "file name"
        # 例如：data/new-post "DSLab 文献管理平台上线" "announcement"
    
3. 此时会在 `_post` 目录创建一个"年-月-日-标题.md"的文件，例如：2016-11-01-announcement.md，接下来就在此文件中写作

4. 在 Markdown 文件头会自动生成以下信息，其中 `layout`,`title`,`date`,`author` 这几项可以不做修改，其余内容根据文章内容修改

        ---
        layout: post
        title:  "DSLab 文献管理平台上线"
        date:   2016-11-01 10:20:45 +0800 
        categories: 
            - Uncategory
        tags:  
            - Untag
        recommend: 必读
        cites: 0
        paper: 
        description: 
        author: 
        ---

    下面对以上信息进行解释：
    
    * `layout`：文章生成 HTML 页面时使用的模板，固定为 `post`
    * `title`：文章标题，自己取的，可以用中文字符，但是引号必须使用英文的
    * `date`：文章撰写时间，格式固定为以上，注意 `+0800` 不用修改
    * `categories`：文章所属分类，可以由多个分类，建议只用一个，注意缩进
    * `tags`：文章标签，相当于关键词，注意缩进
    * `recommend`：你认为的这篇论文的推荐度，一共分为：**必读、推荐阅读、一般、不值得读** 四个等级
    * `cites`：论文的被引用次数，请到谷歌学术、百度学术、知网等查询
    * `paper`：先参照 4 将论文文件放好，再将论文文件名写在此处，包括年月日及后缀名
    * `description`：文章的描述，可以是文章摘要
    * `author`： 你的姓名，必写。

4. 将论文放到 `/date/papers／` 目录中，注意**论文只支持 PDF 格式，文件名命名规则为：年-月-日-标题.pdf，年是 4 位数字，月和日都是 2 位数字，一律使用"-"分隔，不可以用空格，标题最好使用英文。**
5. 文章中的图片一律放在 `/data/images/` 目录中，并且按年月归档，例如，要用到一张名为 `dslablogo.gif` 的图片，则其路径应该为：`/data/images/2016/11/dslablogo.gif`，而在文章中引用的时候路径应该写成：`{% raw %}{{site.baseurl}}{% endraw %}/data/images/2016/11/dslablogo.gif`，注意前面的`{% raw %}{{site.baseurl}}{% endraw %}`
    
    `![]({% raw %}{{site.baseurl}}{% endraw %}/data/images/2016/11/dslablogo.gif)` => ![]({{site.baseurl}}/data/images/2016/11/dslablogo.gif)

6. 支持数学公式，例如：`$$a^2 + b^2 = c^2$$` => $$a^2 + b^2 = c^2$$
7. 在列表中不能使用 ``` 来引用代码块，只能使用缩进来表示代码块
8. 只接受实验室内部的文章，且每个小组有自己的仓库
9. 注意，提交到 gh-pages 分支
10. 有任何问题和建议请到 [Issues](https://github.com/LZU-DSLab/kernel/issues) 反馈。