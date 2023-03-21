import { ArrowRightOutlined } from '@ant-design/icons'
import { FC, memo } from 'react'
import { CountryFlag } from '../../../TranslationHistory/components/CountryFlag/CountryFlag'

type PropsType = {
    sourceLanguage: string
    targetLanguage: string
}

export const TranslationLanguages: FC<PropsType> = memo(({ sourceLanguage, targetLanguage }) => (
    <div className='translation__languages'>
        <CountryFlag language={sourceLanguage} />
        {sourceLanguage}
        <ArrowRightOutlined style={{ marginLeft: 10, marginRight: 10, fontSize: '80%' }} />
        <CountryFlag language={targetLanguage} />
        {targetLanguage}
    </div>
))