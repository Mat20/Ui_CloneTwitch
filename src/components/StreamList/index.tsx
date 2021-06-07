import  React from 'react';

import { 
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCatergory,
  TagRow,
  TagView,
  TagText,  
} from './styles';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

const StreamList: React.FC = () => {
 const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

     <StreamColumn>
       <StreamRow>
         <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>katulo21_oficial</StreamUsername>
         </StreamHeader>

         <StreamDescription numberOfLines={1}>
          Matheus Souza Monteiro, Full Stack, React App, Reatc Native, Expo.
         </StreamDescription>

         <StreamCatergory>
           Ciencia & Tecnologia.
         </StreamCatergory>
       </StreamRow>

       <TagRow>
         <TagView>
           <TagText>Portugues</TagText>
         </TagView>
         <TagView>
           <TagText>Web Develooment</TagText>
         </TagView>
       </TagRow>
     </StreamColumn>
    </StreamContainer>
 );

  return (
    <List>
      <StreamItem />
      <StreamItem /> 
      <StreamItem /> 
      <StreamItem />     
    </List>
  );
};

export default StreamList;
