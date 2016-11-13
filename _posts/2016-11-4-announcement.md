---
layout: post
title:  "DSLab 知识分享平台上线"
date:   2016-11-04 10:20:45 +0800
categories: 
    - Uncategory
tags: 
    - Untag
recommend: 新手必读
cites: 0
paper: 2016-11-01-announcement.pdf
description: 
author: 谢启荣
---

DSLab 知识分享平台正式启用，平台浏览地址：<https://lzu-dslab.github.io/kernel/>，此平台基于 [Jekyll](https://jekyllrb.com) + [Github Pages](https://pages.github.com/) 搭建，欢迎实验室成员将自己阅读文献过程中的感悟和学习过程中的心得记录在此，大家在撰写文章之前请花几分钟时间阅读以下的使用说明。


## 撰写方法

1. 克隆此仓库
    
    ```
    git clone https://github.com/LZU-DSLab/kernel.git    
    ```
       
2. 进入 `_post` 目录创建一个"年-月-日-标题.md"的文件，例如：2016-11-01-announcement.md，注意：**在这里，年是 4 位数字，月和日都是 2 位数字，所有一律使用"-"分隔，不可以用空格，标题必须使用英文字符**
3. 在 Markdown 文件头加上以下信

        ---
        layout: post
        title:  "标题"
        date:   2016-11-01 10:20:45 +0800 
        categories: 
            - categoriy1
            - categoriy2
        tags:  
            - tag1
            - tag2
        recommend: 必读
        cites: 
        paper: 
        description: 
        author: 
        ---

    下面对以上信息进行解释：
    
    * `layout`：文章生成 HTML 页面时使用的模板，固定为 `post`
    * `title`：文章标题，自己取的，可以用中文字符，但是引号必须使用英文的
    * `date`：文章撰写时间，格式固定为以上，注意 `+0800` 不用修改
    * `categories`：文章所属分类，可以由多个分类，建议只用一个
    * `tags`：文章标签，相当于关键词
    * `recommend`：你认为的这篇论文的推荐度，一共分为：必读、推荐阅读、一般、不值得读 四个等级
    * `cites`：如果是写的*论文读后感*，则这里写论文的被引用次数，请到谷歌学术、百度学术、知网等查询，如果*只是学习过程中的一些心得*，则这里写：**非论文**
    * `paper`：如果是写的*论文读后感*，则先参照 4 将论文文件放好，再将文件名写在此处，如果*只是学习过程中的一些心得*，则这里留空
    * `description`：文章的描述，可以是文章摘要，也可不写
    * `author`： 你的姓名，必写。

4. 如果是写的*论文读后感*，则将论文放到 `/date/papers／` 目录中，注意**论文只支持 PDF 格式，文件名命名规则为：年-月-日-标题.pdf，年是 4 位数字，月和日都是 2 位数字，所有一律使用"-"分隔，不可以用空格，标题最好使用英文。**
5. 文章中的图片一律放在 `/data/images/` 目录中，并且按年月归档，例如，要用到一张名为 `dslablogo.gif` 的图片，则其路径应该为：`/data/images/2016/11/dslablogo.gif`，而在文章中引用的时候路径应该写成：`{% raw %}{{site.baseurl}}{% endraw %}/data/images/2016/11/dslablogo.gif`，注意前面的`{% raw %}{{site.baseurl}}{% endraw %}`
    
    `![]({% raw %}{{site.baseurl}}{% endraw %}/data/images/2016/11/dslablogo.gif)` => ![]({{site.baseurl}}/data/images/2016/11/dslablogo.gif)

6. 支持数学公式，例如：`$$a^2 + b^2 = c^2$$` => $$a^2 + b^2 = c^2$$
7. 只接受实验室内部的文章，且每个小组有自己的仓库
8. 注意，提交到 gh-pages 分支
9. 有任何问题和建议请到 [Issues](https://github.com/LZU-DSLab/kernel/issues) 反馈。

## Tips

在阅读论文读后感的时候可以点击左下角的按钮，显示论文原文，再次点击即可关闭。