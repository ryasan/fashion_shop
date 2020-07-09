import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const TabsComponent = ({ tabs }) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map(({ title }, i) => (
          <Tab key={i}>{title}</Tab>
        ))}
      </TabList>
      {tabs.map(({ content }, i) => (
        <TabPanel key={i}>{content}</TabPanel>
      ))}
    </Tabs>
  )
}

TabsComponent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default TabsComponent
