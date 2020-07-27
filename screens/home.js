import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';


import globalstyles from '../styles/globalstyles';

function Home({ navigation }){

    const [ reviewList, setReviewList] = useState([
        { id: 1, title: 'Pudhupettai', rating: 8, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", review: "Best film i ever seen in 2000's" , image: 'https://mir-s3-cdn-cf.behance.net/projects/404/19a28d95241727.Y3JvcCwxODU3LDE0NTMsMCwyMg.jpg'},
        { id: 2, title: 'Mankatha', rating: 5, description: "Mankatha is a 2011 Indian Tamil-language action thriller film written and directed by Venkat Prabhu.[5] It features Ajith Kumar in the lead role, starring in his 50th film,[6] along with an ensemble cast including Arjun, Trisha, Raai Lakshmi, Anjali, Andrea, Vaibhav, Premji, and Mahat Raghavendra . It was produced by Dhayanidhi Alagiri's Cloud Nine Movies[5] while Yuvan Shankar Raja composed the musical score and soundtrack, with Sakthi Saravanan working as the cinematographer and the duo Praveen K. L. and N. B. Srikanth as editors. The story, set in Mumbai, revolves around a heist of cricket betting money, executed by a gang of four thieves, who are joined by a fifth unknown man, and its aftermath.", review: "good film with negative characters", image: 'https://d2h7z5r5pp4sed.cloudfront.net/tamil/news/mankatha_310815m.jpg' },
        { id: 3, title: 'Thupakkai', rating: 7, description: "Thuppakki (transl. Gun) is a 2012 Indian Tamil-language action thriller film written and directed by AR Murugadoss. It stars Vijay and Kajal Aggarwal, with Sathyan, Vidyut Jammwal and Jayaram in supporting roles. The film revolves around an Indian Army officer on a mission to track down, destroy and deactivate a sleeper cell, after witnessing and barely escaping a bomb blast executed by the cell.", review: "Best movie", image: 'https://onlineexplore.files.wordpress.com/2012/11/thuppakki-ms2.jpg?w=220' },
        { id: 4, title: 'Jigarthanda', rating: 9, description: "Jigarthanda (transl. Cold-hearted) is a 2014 Indian Tamil-language action thriller film[1] written and directed by Karthik Subbaraj. Produced by Kathiresan's Group Company, it features Siddharth as Karthik, an aspiring filmmaker, who gets a chance to make a film, based on gangsterism. So, he goes to Madurai to research about Assault Sethu (played by Bobby Simha), a merciless gangster who will not hesitate to murder those who try to even write about him.[2] The supporting cast for the film includes Lakshmi Menon, Karunakaran and Guru Somasundaram.[3][4] Gavemic U Ary was the film's cinematographer, making his debut in Tamil cinema, and Vivek Harshan was the film's editor.[5] Santhosh Narayanan composed the songs and background score", review: "Best film i ever seen in 2000's", image: 'https://www.filmibeat.com/ph-big/2014/07/siddharth_140558075450.jpg' },
        { id: 5, title: 'Shawshank', rating: 10, description: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.", review: "Best film i ever seen in 2000's",image: 'https://static.tvtropes.org/pmwiki/pub/images/Shawshank_Redemption.jpg' },
        { id: 6, title: 'Anbe Sivam', rating: 10, description: "Anbe Sivam (transl. Love is God)[5] is a 2003 Indian Tamil-language comedy-drama film directed and co-produced by Sundar C. with K. Muralitharan, V. Swaminathan and G. Venugopal under the banner of Lakshmi Movie Makers. The film was written by Kamal Haasan, and Madhan provided the dialogues. Anbe Sivam stars Haasan, Madhavan and Kiran Rathod, with Nassar, Santhana Bharathi, Seema and Uma Riyaz Khan playing supporting characters.", review: "Best film i ever seen in 2000's", image: 'https://www.behindwoods.com/tamil-movies/slideshow/100-cult-tamil-movies-you-shouldnt-miss-out/images/anbe-sivam-1.jpg' },
        { id: 7, title: '24', rating: 7, description: "The film's development dates back to 2009, at which time it was to feature actors Vikram and Ileana D'Cruz in lead roles. However, in February 2010, the project was dropped due to the difference in opinions between director, producer, and actor, facing rejection of the refined script. In August 2014, Suriya agreed to produce and act in the film, with principal photography commencing in Mumbai in April 2015, continuing in Nasik, Goregaon and Pune. The second phase of filming was done in Poland by the end of September 2015. Filming was completed in Chennai by November 2015", review: "Good moview", image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/05/06/457570-suriya-24.jpg' },
        { id: 8, title: 'Aayrathil oruvan', rating: 6, description: "Aayirathil Oruvan (transl. One Man in a Thousand) is a 2010 Tamil-language action-adventure film[1] written and directed by Selvaraghavan and produced by R. Ravindran. The film stars Karthi, Reemma Sen and Andrea Jeremiah in the lead with Parthiepan playing a pivotal role. It is the first instalment in the two-part series, followed by Aayirathil Oruvan 2. It revolves around three characters, Muthu (Karthi), Anitha (Reemma Sen) and Lavanya (Andrea Jeremiah), who embark on an adventure to search for a missing archaeologist. It is inspired loosely by the historical decline of the Tamil Chola dynasty and the rise of the Tamil Pandya dynasty.", image: 'https://images-na.ssl-images-amazon.com/images/I/91oD2EUCKJL._RI_.jpg', review: "Good movie" }
    ]);

    const renderItem = ({ item }) => {
        return <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Reviewdetail', { ...item} )}>
            <Image 
                style={{width: 150, height: 120,  resizeMode: 'stretch'}}
                source={{uri : item.image}}
            />
            <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
    }

    return(
        <View style={globalstyles.fullSpace}>
            <Text style={styles.screenTitle} >Movies</Text>
            <View style={styles.movieListConatiner}>
                <FlatList 
                   columnWrapperStyle={styles.listContainer}
                    data = { reviewList }
                    numColumns= {2}
                    renderItem={ renderItem }
                    keyExtractor={ item => item.id.toString() }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenTitle:{
        fontSize: 24,
        fontWeight: "bold",
        paddingVertical: 15,
        paddingLeft: 15,
        color: "#2C3E50"
    },
    movieListConatiner:{
        flex: 1,
        paddingTop: 5,
    },
    card: {
       backgroundColor: "#fff",
       width: 150,
       height: 150,
       marginVertical: 10,
       elevation: 3
    },
    itemText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2C3E50",
        textAlign: "center",
        paddingTop: 2
    },
    listContainer:{
        flex: 1,
        justifyContent: "space-evenly"
    }
})

export default Home;