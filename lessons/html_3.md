# HTML Tables

## [Table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
Tables have been one of the most abused tags to ever exist.  And it wasn't even their fault.  The column and row nature of tables was very easy to exploit and create layouts.  These layouts resized with the page and everything.  They were almost perfect except for the fact the the content of the table had nothing to do with tables.

Tables represent tabular data, period.

The `table` tag itself does not render content to the page but it is a containing/grouping element.  The `table` tag is only allowed to have the following tags directly nested:  caption, colgroup, thead, tfoot, tbody

    <table>
        <!-- table content -->
    </table>


### [caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
The `caption` is the title of a table.  This is not a required tag but it can be useful.  If you do use it, you have to use it first thing after the opening table tag.

    <table>
        <caption>Table title</caption>
        <!-- table content -->
    </table>


### [colgroup](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup) and [col](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)
These tags allows you to group a collection of columns together for the purpose of styling their data.  This may seem a little weird but it is actually difficult to get column styled easily.  The `colgroup` tag defines an area that will be grouped while the `col` tag actually represents the columns to be styled.  

The `span` attribute allows you to specify how many columns the styling will span.


    <table>
        <caption>Table title</caption>
        <colgroup>
          <col span="2" style="background-color:red">
          <col style="background-color:yellow">
        </colgroup>
        <!-- table content -->
    </table>

I do not really agree with this.  I would use classes and css.

### [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
This tag calls out a row of data as the table headers.  This is where you may define what content will be in a column.  The `thead` uses a slightly different tag to describe its data than a normal table cell.  You will see this a few paragraphs down the page.

    <table>
      <caption>Table title</caption>
      <thead></thead>
    </table>

### [tfoot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
The `foot` tag is used to define a row of content for the table footer.  The weird part of this tag is that is has to be rendered before the `tbody`.  Using a `tfoot` tag allows you scroll table data but keep a static footer.  This tag is not required.

    <table>
      <caption>Table title</caption>
      <thead></thead>
      <tfoot></tfoot>  
    </table>

### [tbody](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
The `tbody` is used to groups rows of tabular data for a table.  This tag is where the actual data will exist.  You can use multiple `tbody` tags in a single table.  Doing this will allow you to have multiple groupings of rows for whatever reason.

    <table>
      <caption>Table title</caption>
      <thead></thead>
      <tbody></tbody>
      <tbody></tbody>
    </table>


### [tr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
Now you must have heard me mention rows a few times by now as many of the previous tags are used to group or identify rows.  The `tr` tag is used to create a row in a table.  Table rows can only nest table data tags: th and td.

    <table>
      <thead>
        <tr></tr>
      </thead>
      <tfoot>
        <tr></tr>
      </tfoot>
      <tbody>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </tbody>  
    </table>

### [td](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
Finally!  That was a lot of nesting just to get to this one tag. The `td` tag is an actual a standard cell of data in a table.  It can only exist in a table row.  While visually rows go across the page, it is easier to read them in your code if you write them down the page.

    <table>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
      </tbody>  
    </table>

### [th](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
This tag is almost the same as the `td` tag but it calls out header data.  This may seem like a little overkill because you just defined a `thead` and now you need a `th`.  Well not every header will work in a table head tag.  What if your table goes across the page instead of down it?  You will need a way to establish headers in a different manner.

    <table>
      <caption>Headers across the table</caption>
      <thead>
        <tr>
          <th>Column Head 1</th>
          <th>Column Head 2</th>
          <th>Column Head 3</th>
          <th>Column Head 4</th>
        </tr>
      </thead>
    </table>


    <table>
      <caption>Headers down the table</caption>
      <tr>
        <th>Header A</th>
        <td>Data A:1</td>
        <td>Data A:2</td>
        <td>Data A:3</td>
      </tr>
      <tr>
        <th>Header B</th>
        <td>Data B:1</td>
        <td>Data B:2</td>
        <td>Data B:3</td>
      </tr>
      <tr>
        <th>Header C</th>
        <td>Data C:1</td>
        <td>Data C:2</td>
        <td>Data C:3</td>
      </tr>
    </table>

### Complete Example

    <table>
      <caption>Vertical Table</caption>
      <thead>
        <tr>
          <th>Column Head 1</th>
          <th>Column Head 2</th>
          <th>Column Head 3</th>
          <th>Column Head 4</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>Column Foot 1</td>
          <td>Column Foot 2</td>
          <td>Column Foot 3</td>
          <td>Column Foot 4</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
      </tbody>  
    </table>


### Spanning rows and columns

Just like with Excel or Numbers, html gives you the ability to merge cells across columns and down rows with attributes.  This can get a little tricky and it is easy to make mistakes doing this so make sure that you save or better yet git commit your project before doing this.

#### [rowspan](http://www.w3schools.com/tags/att_td_rowspan.asp)
This defines the number of rows that a data cell will span over.  You must remove a `td` from each row you want to span.


#### [colspan](http://www.w3schools.com/tags/att_td_colspan.asp)
This defines the number of columns that a data cell will span over.  You must remove a `td` from a row for ever column you want to span.

    <table>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td colspan='2'>Data 2</td>
          <td>Data 4</td>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td rowspan='3'>Data 3</td>
          <td>Data 4</td>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 4</td>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 4</td>
        </tr>
      </tbody>  
    </table>
